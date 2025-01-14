import dotenv from "dotenv";
import { Telegraf, Context } from "telegraf";
import { Message } from "telegraf/types";
import fs from "fs";
import {
  HistoryMessage,
  ProviderFactory,
  ProviderType,
  BaseLLMProvider,
  LLMError,
} from "./providers";
import { tools } from "./tools";
import { ToolResultBlockParam } from "@anthropic-ai/sdk/resources/messages";
import { Logger } from "./utils/logger";

// Load environment variables
dotenv.config();

const cursorRules = fs.readFileSync("../.cursorrules", "utf-8");
const systemPrompt = cursorRules;

// Initialize LLM provider
const CURRENT_PROVIDER = (process.env.LLM_PROVIDER as ProviderType) || "ollama";
let llmProvider: BaseLLMProvider;

try {
  llmProvider = ProviderFactory.create(CURRENT_PROVIDER, {
    apiKey: process.env[`${CURRENT_PROVIDER.toUpperCase()}_API_KEY`],
    model: process.env[`${CURRENT_PROVIDER.toUpperCase()}_MODEL`],
    host: process.env.OLLAMA_HOST,
  });
} catch (error) {
  console.error(`Failed to initialize ${CURRENT_PROVIDER} provider:`, error);
  process.exit(1);
}

// Initialize bot with token from environment variables
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "");

// Store conversation history and loggers
const conversationHistory = new Map<number, Array<HistoryMessage>>();
const userLoggers = new Map<number, Logger>();

// Helper to get chat history
function getChatHistory(chatId: number) {
  if (!conversationHistory.has(chatId)) {
    conversationHistory.set(chatId, [{ role: "user", content: systemPrompt }]);
  }
  return conversationHistory.get(chatId)!;
}

// Helper to get or create logger for a user
function getLogger(user: any) {
  const chatId = user.id;
  if (!userLoggers.has(chatId)) {
    userLoggers.set(chatId, new Logger({ ...user, app: "telegram" }));
  }
  return userLoggers.get(chatId)!;
}

// Basic error handling
bot.catch((err: unknown, ctx: Context) => {
  console.error("Telegraf error:", err);
  ctx.reply("Sorry, I encountered an error. Please try again later.");
});

// Command handlers
bot.command("start", async (ctx: Context) => {
  const chatId = ctx.chat?.id;
  if (!chatId) return;

  const user = ctx.from;
  if (!user) return;

  console.log("user", user);
  console.log("chatId", chatId);

  const logger = getLogger(user);
  llmProvider.setLogger(logger);
  logger.log(chatId, "system", "Clearing conversation history");

  conversationHistory.set(chatId, [
    { role: "system", content: systemPrompt },
    {
      role: "user",
      content: JSON.stringify({
        user,
        todaysDate: new Date().toISOString().split("T")[0],
      }),
    },
    { role: "user", content: "Hi!" },
  ]);

  logger.log(chatId, "user", "/start");

  await processMessage(ctx, getChatHistory(chatId));
});

// Command to show current provider
bot.command("provider", (ctx: Context) => {
  const chatId = ctx.chat?.id;
  if (!chatId || !ctx.from) return;

  const logger = getLogger(ctx.from);
  llmProvider.setLogger(logger);

  logger.log(chatId, "user", "/provider");

  const { name, model } = llmProvider.getModelInfo();
  const response = `Current provider: ${name} (${model})`;

  logger.log(chatId, "bot-response", response);

  ctx.reply(response);
});

function cleanupTags(text: string, tag: string): string {
  let cleanedText = text;

  const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "g");
  cleanedText = cleanedText.replace(regex, "");

  if (!cleanedText.includes(`${tag}>`)) {
    return cleanedText;
  }

  // Handle unclosed tags by removing all text after them
  const unclosedToolIndex = cleanedText.indexOf(`<${tag}>`);
  if (unclosedToolIndex !== -1) {
    cleanedText = cleanedText.substring(0, unclosedToolIndex);
  }

  // Handle unopened tags by removing all text before them
  const unopenedToolIndex = cleanedText.indexOf(`<\/${tag}>`);
  if (unopenedToolIndex !== -1) {
    cleanedText = cleanedText.substring(unopenedToolIndex);
  }

  return cleanedText;
}

function getTagContent(text: string, tag: string): string {
  const matches = text.match(`<${tag}>(.*?)<\/${tag}>`);
  let content = matches ? matches[1] : text;
  content = content.replace(`<${tag}>`, "");
  content = content.replace(`<\/${tag}>`, "");
  content = content.trim();

  return content;
}

async function processMessage(ctx: Context, history: HistoryMessage[]) {
  try {
    if (!ctx.chat?.id || !ctx.from) return;

    const logger = getLogger(ctx.from);
    llmProvider.setLogger(logger);

    // Get initial response
    let message = await llmProvider.ask(history, ctx.chat?.id);

    let waitingForToolResponse = false;
    for (const content of message.content) {
      if (content.type === "text") {
        await ctx.sendChatAction("typing");

        let textContent = content.text;
        textContent = cleanupTags(textContent, "role_selection");
        textContent = cleanupTags(textContent, "analysis");
        textContent = cleanupTags(textContent, "tool_selection");

        textContent = getTagContent(textContent, "response");

        history.push({
          role: "assistant",
          content: content.text,
        });

        logger.log(ctx.chat?.id, "bot-response", textContent);

        if (textContent) {
          await ctx.reply(textContent, {
            parse_mode: "HTML",
          });
        }
      }

      if (content.type === "tool_use") {
        await ctx.sendChatAction("typing");

        waitingForToolResponse = true;

        // Add tool_use message to history
        history.push({
          role: "assistant",
          content: [content],
        });

        console.log("exec:", content.name, content.input);

        const toolResponse = await tools[content.name].execute(content.input);

        const toolResult: ToolResultBlockParam = {
          type: "tool_result",
          tool_use_id: content.id,
          content: toolResponse,
        };

        logger.log(ctx.chat?.id, "tool-execution", "", {
          tool: content.name,
          input: content.input,
          output: toolResponse,
        });

        history.push({
          role: "user",
          content: [toolResult],
        });
      }
    }

    if (waitingForToolResponse) {
      await processMessage(ctx, history);
    }
  } catch (error: any) {
    console.error(`${CURRENT_PROVIDER} error:`, error.message);

    if (ctx.chat?.id && ctx.from) {
      const logger = getLogger(ctx.from);
      logger.log(ctx.chat?.id, "system", error.message);
    }

    let errorMessage = `Sorry, I encountered an error.\n\n`;

    if (error instanceof LLMError) {
      errorMessage += "Restart the conversation with /start";
    }

    await ctx.reply(errorMessage);
  }
}

// Handle messages
bot.on("text", async (ctx: Context) => {
  const chatId = ctx.chat?.id;
  const messageText = (ctx.message as Message.TextMessage).text;

  if (!chatId || !ctx.from) return;

  const history = getChatHistory(chatId);
  history.push({ role: "user", content: messageText });

  // Log user message
  const logger = getLogger(ctx.from);
  logger.log(chatId, "user", messageText);

  processMessage(ctx, history);
});

// Launch bot
async function startBot() {
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.error("\n❌ Error: TELEGRAM_BOT_TOKEN is not set in .env file");
    console.log("\n📝 Setup Instructions:");
    console.log("1. Create a bot with @BotFather on Telegram");
    console.log("2. Copy the token you received");
    console.log("3. Create .env file: cp .env.example .env");
    console.log(
      "4. Add your token to .env: TELEGRAM_BOT_TOKEN=your_token_here"
    );
    console.log("\nSee docs/telegram-bot-setup.md for detailed instructions");
    process.exit(1);
  }

  try {
    await bot.launch();
    const { name, model } = llmProvider.getModelInfo();
    console.log("\n✅ Bot is running!");
    console.log(`🤖 Provider: ${name} (${model})`);
    console.log("📚 System prompt loaded from cursorrules");

    if (name === "ollama") {
      console.log("\n💡 Tip: Make sure Ollama is running:");
      console.log("   docker-compose up -d ollama");
      console.log("   docker exec -it ollama ollama pull mistral");
    }
  } catch (error: any) {
    if (error?.response?.error_code === 404) {
      console.error("\n❌ Error: Invalid Telegram bot token");
      console.log("\n🔍 Common issues:");
      console.log("1. Token might be incorrect or expired");
      console.log("2. Bot might have been deleted");
      console.log("3. .env file might not be properly set up");
      console.log("\n📝 To fix:");
      console.log("1. Check your bot with @BotFather");
      console.log("2. Verify the token in your .env file");
      console.log("3. Make sure you copied the entire token");
      console.log("\nSee docs/telegram-bot-setup.md for help");
    } else {
      console.error("\n❌ Failed to start bot:", error.message);
      console.log("\n🔍 Troubleshooting steps in docs/telegram-bot-setup.md");
    }
    process.exit(1);
  }
}

// Start the bot
startBot();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
