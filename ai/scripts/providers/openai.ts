import OpenAI from "openai";
import {
  BaseLLMProvider,
  HistoryMessage,
  ProviderConfig,
  LLMError,
  ProcessedMessage,
} from "./types";
import { toolDefinitions } from "../tools";

export class OpenAIProvider extends BaseLLMProvider {
  private client: OpenAI;
  protected name = "openai";
  protected model: string;
  protected tools: any[];

  constructor(config: ProviderConfig) {
    super();
    if (!config.apiKey) {
      throw new LLMError(
        this.name,
        "API_KEY",
        "OpenAI API key not set in environment"
      );
    }

    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.host,
    });

    this.model = config.model;

    // Transform tools to OpenAI format
    this.tools = toolDefinitions.map((tool) => ({
      type: "function",
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.input_schema,
      },
    }));
  }

  async ask(
    history: HistoryMessage[],
    sessionId: number | string
  ): Promise<ProcessedMessage> {
    try {
      const systemPrompt = String(
        history.find((msg) => msg.role === "system")?.content || ""
      );

      const messages = history
        .filter((msg) => msg.role !== "system")
        .map((msg) => ({
          role: msg.role,
          content: String(msg.content),
        }));

      const response = await this.client.chat.completions.create({
        model: this.model,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        tools: this.tools,
      });

      this.logResponse(response, sessionId);

      return this.processResponse(response);
    } catch (error: any) {
      throw new LLMError(
        this.name,
        "UNKNOWN",
        `OpenAI API error: ${error.message}`
      );
    }
  }

  protected processResponse(
    response: OpenAI.Chat.ChatCompletion
  ): ProcessedMessage {
    const message = response.choices[0].message;
    const result: ProcessedMessage = {};

    // Handle text content
    if (message.content) {
      result.text = message.content;
    }

    // Handle tool calls
    if (message.tool_calls?.length) {
      result.toolCalls = message.tool_calls.map((tool) => ({
        id: tool.id,
        name: tool.function.name,
        input: JSON.parse(tool.function.arguments),
      }));
    }

    return result;
  }
}
