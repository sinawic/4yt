
import Redis from "ioredis";

const redis = new Redis();

const main = () => {
  redis.subscribe("channel_name", (err, count) => {
    if (err) console.error(err.message);
    console.log(`Subscribed to ${count} channels.`);
  });

  redis.on("message", (channel, message) => {
    console.log(`Received message from ${channel}:`, JSON.parse(message));
  });
};

main();
