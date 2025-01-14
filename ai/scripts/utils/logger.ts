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

  private static getLogPath(type: LogType): string {
    const date = new Date();
    const username = this.currentUser?.username || "anonymous";
    const dateStr = date.toISOString().split("T")[0]; // YYYY-MM-DD

    // Create directory structure
    const dirPath = path.join(this.LOG_DIR, username, dateStr);
    fs.mkdirSync(dirPath, { recursive: true });

    // Return full file path with type as filename
    return path.join(dirPath, `${type}.log`);
  }

  static log(
    sessionId: string | number,
    type: LogType,
    content: string,
    metadata?: LogMetadata
  ) {
    this.initialize();

    const timestamp = new Date().toISOString();
    const logPath = this.getLogPath(type);

    let logEntry = `[${timestamp}] Session ID: ${sessionId}\n`;

    if (metadata) {
      logEntry += `Metadata: ${JSON.stringify(metadata, null, 2)}\n`;
    }

    logEntry += `Content: ${content}\n`;
    logEntry += "----------------------------------------\n";

    fs.appendFileSync(logPath, logEntry);
  }
}
