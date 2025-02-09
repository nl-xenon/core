import { type LoggerOptions } from "winston";
export declare class NLXLogger {
    private logger;
    constructor(options?: LoggerOptions);
    debug(message: string, meta?: Record<string, unknown>): void;
    info(message: string, meta?: Record<string, unknown>): void;
    warn(message: string, meta?: Record<string, unknown>): void;
    error(message: string, meta?: Record<string, unknown>): void;
}
declare const _default: NLXLogger;
export default _default;
//# sourceMappingURL=index.d.ts.map