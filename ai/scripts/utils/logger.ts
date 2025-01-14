import fs from "fs";
import path from "path";

interface UserInfo {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  app?: string;
}

export type LogType =
  | "user"
  | "system"
  | "llm-request"
  | "llm-response"
  | "bot-response"
  | "tool-execution"
  | "cli-request"
  | "cli-response";

export interface LogMetadata {
  provider?: string;
  model?: string;
  [key: string]: any;
}

export class Logger {
  private static LOG_DIR = "logs";
  private static currentUser: UserInfo | null = null;

  static setUser(user: UserInfo) {
    this.currentUser = user;
  }

  static initialize() {
    if (!fs.existsSync(this.LOG_DIR)) {
      fs.mkdirSync(this.LOG_DIR);
    }
  }

  static log(
    sessionId: string | number,
    type: LogType,
    content: string,
    metadata?: LogMetadata
  ) {
    this.initialize();

    const date = new Date();
    const fileName = path.join(
      this.LOG_DIR,
      `chat_${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.log`
    );
    const timestamp = date.toISOString();

    let logEntry = `\n[${timestamp}] Session ID: ${sessionId} | Type: ${type}\n`;

    if (metadata) {
      logEntry += `Metadata: ${JSON.stringify(metadata, null, 2)}\n`;
    }

    logEntry += `Content: ${content}\n`;
    logEntry += "----------------------------------------\n";

    fs.appendFileSync(fileName, logEntry);
  }
}
