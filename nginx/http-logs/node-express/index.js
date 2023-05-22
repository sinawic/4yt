const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  console.log(req.body)
  console.log(req.headers)
  res.status(200).send('Hello World!')
})
app.post('/', (req, res) => {
  console.log(req.body)
  console.log(req.headers)
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
