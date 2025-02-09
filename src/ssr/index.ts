import { renderToString } from "@vue/server-renderer";
import { createApp } from "vue";
import type { App } from "vue";

export class SSRRenderer {
  private app: App;

  constructor(rootComponent: any) {
    this.app = createApp(rootComponent);
  }

  async renderToString(): Promise<string> {
    const html = await renderToString(this.app);
    return `
      <!DOCTYPE html>
      <html>
        <head><title>NLXenon</title></head>
        <body>
          <div id="app">${html}</div>
          <script src="/client.js"></script>
        </body>
      </html>
    `;
  }

  // Для передачи состояния на клиент
  serializeState(state: Record<string, unknown>): string {
    return `<script>window.__INITIAL_STATE__ = ${JSON.stringify(
      state
    )}</script>`;
  }
}
