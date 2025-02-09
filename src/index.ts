export * from "./config";
export * from "./logger";
export * from "./ssr";
export * from "./types";
export * from "./updater";


import { createApp } from 'vue';
import type { App } from 'vue';

export function createNLXApp(rootComponent: any): App {
  const app = createApp(rootComponent);
  return app;
}