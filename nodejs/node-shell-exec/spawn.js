// The spawn() function executes a command in a new process.
// This function uses a Stream API, so its output of the command is made available via listeners.


const { spawn } = require("child_process")

const ls = spawn("ls", ["-la"])

ls.stdout.on("data", data => {
  console.log(`stdout: ${data}`)
})

ls.stderr.on("data", data => {
  console.log(`stderr: ${data}`)
})

ls.on('error', (error) => {
  console.log(`error: ${error.message}`)
})

ls.on("close", code => {
  console.log(`child process exited with code ${code}`)
})

// The key difference between exec() and spawn() is how they return the data.
// As exec() stores all the output in a buffer, it is more memory intensive than spawn(),
// which streams the output as it comes.
// Generally, if you are not expecting large amounts of data to be returned, you can use exec() for simplicity.