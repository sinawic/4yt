/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import url from 'url';
import querystring from 'querystring';

const BASE_PATH = "./public";

const server = Bun.serve<{ username: string }>({
  fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/chat") {
      console.log(`upgrade!`);
      const username = getUsernameFromReq(req).username;
      const success = server.upgrade(req, { data: { username } });
      return success
        ? undefined
        : new Response("WebSocket upgrade error", { status: 400 });
    }

    const file = Bun.file(BASE_PATH + '/index.html');
    return new Response(file);
  },
  websocket: {
    open(ws) {
      console.log('openning')
      const msg = `${ws.data.username} has entered the chat`;
      ws.subscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
    },
    message(ws, message) {
      console.log('messaging')
      // this is a group chat
      // so the server re-broadcasts incoming message to everyone
      ws.publish("the-group-chat", `${ws.data.username}:${message}`);
    },
    close(ws) {
      console.log('closing')
      const msg = `${ws.data.username} has left the chat`;
      ws.unsubscribe("the-group-chat");
      ws.publish("the-group-chat", msg);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);

const getUsernameFromReq = (req: any) => {
  const parsedUrl: any = url.parse(req.url);
  const queryParams = querystring.parse(parsedUrl.query);
  return queryParams;
}
