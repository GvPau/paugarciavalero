import app from "./app.ts";

Bun.serve({
  fetch: app.fetch,
  port: 2000,
});

console.log("Server running");
