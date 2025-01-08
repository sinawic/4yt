const util = require('util')
const os = require('os')
const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.all('*', (req, res) => {
  const { ip, url, headers, body, query } = req
//  console.dir({ hostname: os.hostname(), url, headers, body, query })
  console.log(util.inspect({ ip, hostname: os.hostname(), url, headers, body, query }, { depth: null, colors: true }))
  res.status(200).send({ ip, hostname: os.hostname(), url, headers, body, query })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
