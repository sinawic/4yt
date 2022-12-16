import Redis from "ioredis";

var redis = new Redis();

async function main() {

  while (1) {
    // read events from the beginning of stream 'events'
    let res = await redis.sendCommand(
      new Redis.Command("XREAD", ["STREAMS", "queue", 0]));

    // parse the results (which are returned in quite a nested format)
    let events = res ? res[0][1] : [];
    events.length && console.log(`processing ${events.length} messages!`)

    for (var i = 0; i < events.length; i++) {
      let thisEvent = events[i]
      console.log("## id is ", thisEvent[0].toString());
      for (var eachKey in thisEvent[1]) {
        console.log(thisEvent[1][eachKey].toString());

        // remove the consumed message
        await redis.sendCommand(
          new Redis.Command("XDEL", ["queue", thisEvent[0].toString()]));
      }
    }
  }
}

main()