import { App } from "@tinyhttp/app";
import { json } from "milliparsec";
import Redis from "ioredis";

const app = new App();
const redis = new Redis();

app.use(json());

app.post("/", (req, res) => {
  console.log(`Sending message:`, req.body)
  redis.publish("channel_name", JSON.stringify({ ...req.body }));
  return res.sendStatus(200);
});

app.listen(3000, () => console.log('web server is listening on port 3000'));
