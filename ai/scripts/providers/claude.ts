import Anthropic from "@anthropic-ai/sdk";
import {
  BaseLLMProvider,
  HistoryMessage,
  ProviderConfig,
  LLMError,
} from "./types";
import { toolDefinitions } from "../tools";
import { Logger } from "../utils/logger";

export class ClaudeProvider extends BaseLLMProvider {
  private client: Anthropic;
  protected name = "claude";
  protected model: string;
  protected tools: any[];

  constructor(config: ProviderConfig) {
    super();
    if (!config.apiKey) {
      throw new LLMError(
        this.name,
        "API_KEY",
        "Anthropic API key not set in environment"
      );
    }

    this.client = new Anthropic({
      apiKey: config.apiKey,
    });

    this.model = config.model || "claude-3-sonnet-20240229";

    this.tools = toolDefinitions;
  }

  async ask(
    history: HistoryMessage[],
    sessionId: number | string
  ): Promise<Anthropic.Messages.Message> {
    try {
      const systemPrompt = String(
        history.find((msg) => msg.role === "system")?.content || ""
      );

      const messages: Anthropic.Messages.MessageParam[] = history
        .filter((msg) => msg.role !== "system")
        .map((msg) => ({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: msg.content,
        }));

      const request: Anthropic.Messages.MessageCreateParamsNonStreaming = {
        model: this.model,
        system: [
          {
            type: "text",
            text: systemPrompt,
            // claude-3-sonnet-20240229 does not support cache_control
            // cache_control: { type: "ephemeral" },
          },
        ],
        messages: messages,
        tools: this.tools,
        max_tokens: 4096,
        temperature: 0,
      };
      this.logRequest(request.messages, sessionId);

      const response = await this.client.messages.create(request);
      this.logResponse(response.content, sessionId);

      return response;
    } catch (error: any) {
      if (error.status === 401) {
        throw new LLMError(this.name, "API_KEY", "Invalid Anthropic API key");
      } else if (error.status === 429) {
        throw new LLMError(this.name, "CONNECTION", "Rate limit exceeded");
      } else if (error.status === 500) {
        throw new LLMError(this.name, "UNKNOWN", "Anthropic service error");
      } else if (error.code === "ETIMEDOUT") {
        throw new LLMError(this.name, "TIMEOUT", "Request timed out");
      }

      throw new LLMError(
        this.name,
        "UNKNOWN",
        error.message || "Unknown error occurred"
      );
    }
  }
}
