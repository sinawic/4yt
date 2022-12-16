import Redis from "ioredis";

var redis = new Redis();

async function main() {
  // write an event to stream 'events', setting 'key1' to 'value1'
  await redis.sendCommand(
    new Redis.Command("XADD", ["queue", "*", "message", "NodeJSs"]));

  redis.disconnect()
}

main()