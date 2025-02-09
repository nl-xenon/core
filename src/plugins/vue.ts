import { type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";

export function createVuePlugin(): Plugin {
  return vue();
}
