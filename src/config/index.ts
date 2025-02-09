import { z } from "zod";

const ConfigSchema = z.object({
  ssr: z.boolean().default(true),
  logger: z.object({
    level: z.enum(["debug", "info", "warn", "error"]).default("info"),
  }),
});

export type NLXConfig = z.infer<typeof ConfigSchema>;

export function loadConfig(userConfig: Partial<NLXConfig>): NLXConfig {
  return ConfigSchema.parse(userConfig);
}
