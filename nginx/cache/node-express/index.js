const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.headers)
  res.status(200).send('HELLO WORLD!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
