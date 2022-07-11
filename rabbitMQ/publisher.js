const amqp = require('amqp-connection-manager')
const q = 'tasks'

const main = async () => {
  const connection = amqp.connect([
    'amqp://localhost:5672',
    'amqp://localhost:5673',
    'amqp://localhost:5674'
  ])

  let channel = connection.createChannel({
    json: true,
    setup: ch => {
      return ch.assertQueue(q, { durable: true })
    }
  })

  console.log("started publishing")
  setInterval(async () => {
    await channel.sendToQueue(q, { value: Math.random() })
  }, 100);
}

main()