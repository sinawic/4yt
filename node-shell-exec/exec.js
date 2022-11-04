// Node.js executes its main event loop in a single thread.
// However, that does not mean that all of its processing is done in that one thread.
// Asynchronous tasks in Node.js are executed in other internal threads.
// When they are complete, the code in the callback, or error, is returned to the main, single thread.

// The exec() function creates a new shell and executes a given command.
// The output from the execution is buffered, which means kept in memory, and is available for use in a callback.

const { exec } = require("child_process")

exec("ls -la", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})