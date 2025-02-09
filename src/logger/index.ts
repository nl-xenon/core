import { type LoggerOptions, createLogger, transports, format } from "winston";

export class NLXLogger {
  private logger;

  constructor(options: LoggerOptions = {}) {
    this.logger = createLogger({
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
      transports: [new transports.Console()],
      ...options,
    });
  }

  public debug(message: string, meta?: Record<string, unknown>) {
    this.logger.debug(message, meta);
  }

  public info(message: string, meta?: Record<string, unknown>) {
    this.logger.info(message, meta);
  }

  public warn(message: string, meta?: Record<string, unknown>) {
    this.logger.warn(message, meta);
  }

  public error(message: string, meta?: Record<string, unknown>) {
    this.logger.error(message, meta);
  }
}

// Пример использования
export default new NLXLogger();
