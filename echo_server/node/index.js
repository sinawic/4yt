const util = require('util')
const os = require('os')
const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.all('*', (req, res) => {
  const { ip, url, headers, body, query } = req
  console.log(util.inspect({ ip, hostname: os.hostname(), url, method: req.method, headers, body, query }, { depth: null, colors: true }))
  // custom logic here
  res.status(200).send({ ip, hostname: os.hostname(), url, method: req.method, headers, body, query })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
