import OpenAI from "openai";
import {
  BaseLLMProvider,
  HistoryMessage,
  ProviderConfig,
  LLMError,
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
  ): Promise<any> {
    try {
      const systemPrompt = String(
        history.find((msg) => msg.role === "system")?.content || ""
      );

      const messages = history
        .filter((msg) => msg.role !== "system")
        .map((msg) => ({
          role: msg.role,
          content:
            typeof msg.content === "string"
              ? msg.content
              : JSON.stringify(msg.content),
        }));

      // Add system message at the beginning
      messages.unshift({
        role: "system",
        content: systemPrompt,
      });

      const request = {
        model: this.model,
        messages,
        tools: this.tools,
        temperature: 0,
      };

      this.logRequest(request.messages, sessionId);

      const response = await this.client.chat.completions.create(request);

      // Transform OpenAI response to match Anthropic's format
      const transformedResponse = {
        content: response.choices[0].message.content
          ? [{ type: "text", text: response.choices[0].message.content }]
          : [],
        tool_calls:
          response.choices[0].message.tool_calls?.map((tool) => ({
            type: "tool_use",
            id: tool.id,
            name: tool.function.name,
            input: JSON.parse(tool.function.arguments),
          })) || [],
      };

      this.logResponse(transformedResponse, sessionId);

      return transformedResponse;
    } catch (error: any) {
      if (error?.status === 401) {
        throw new LLMError(this.name, "API_KEY", "Invalid OpenAI API key");
      } else if (error?.status === 429) {
        throw new LLMError(this.name, "CONNECTION", "Rate limit exceeded");
      } else if (error?.status === 500) {
        throw new LLMError(this.name, "UNKNOWN", "OpenAI service error");
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
