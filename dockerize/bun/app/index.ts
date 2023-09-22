const server = Bun.serve({
  port: 8080,
  fetch(req) {
    return new Response("Hello Bun!!!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
