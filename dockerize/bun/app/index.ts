const objectToString = (obj: any) => {
  let result = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += key + ': ' + obj[key] + '\n\t';
    }
  }
  // Remove the trailing comma and space
  result = result.slice(0, -2);
  return result;
}

const content = "Hello bun from docker"

const server = Bun.serve({
  hostname: "0.0.0.0",
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === "/") return new Response("Home page!")
    if (url.pathname === "/blog") return new Response("Blog!")
    if (url.pathname === "/envs") return new Response(`\tall env list:\n\t${objectToString(Bun.env)}`)
    if (url.pathname === "/html") return new Response(`<pre>${content}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
    return new Response("404!")
  },
})

console.log(`Listening on http://localhost:${server.port} ...`);
