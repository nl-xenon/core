import { defineConfig } from "vite";
import swc from "vite-plugin-swc";

export default defineConfig({
  plugins: [
    swc({
      swcOptions: {
        jsc: {
          parser: {
            syntax: "typescript",
            decorators: true,
          },
          target: "esnext",
        },
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
      ignored: ["node_modules/**", ".nlxenon/**"],
    },
    hmr: true,
  },
});
