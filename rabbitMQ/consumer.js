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

  channel.addSetup(ch => {
    return Promise.all([
      ch.consume(q, msg => {
        console.log(msg.content.toString())
      }, { noAck: true, exclusive: false })
    ])
  })
}

main()