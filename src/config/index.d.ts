import { z } from "zod";
declare const ConfigSchema: z.ZodObject<{
    ssr: z.ZodDefault<z.ZodBoolean>;
    logger: z.ZodObject<{
        level: z.ZodDefault<z.ZodEnum<["debug", "info", "warn", "error"]>>;
    }, "strip", z.ZodTypeAny, {
        level: "debug" | "info" | "warn" | "error";
    }, {
        level?: "debug" | "info" | "warn" | "error" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    ssr: boolean;
    logger: {
        level: "debug" | "info" | "warn" | "error";
    };
}, {
    logger: {
        level?: "debug" | "info" | "warn" | "error" | undefined;
    };
    ssr?: boolean | undefined;
}>;
export type NLXConfig = z.infer<typeof ConfigSchema>;
export declare function loadConfig(userConfig: Partial<NLXConfig>): NLXConfig;
export {};
//# sourceMappingURL=index.d.ts.map