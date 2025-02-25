const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // custom logic goes here
  console.log(req.headers)
  if (req.headers['authorization'])
    res.status(200).send('YAY')
  else
    res.status(401).send('ERROR')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
