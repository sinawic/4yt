const fs = require('fs')
const path = require('path')

const jsonFile = path.join(__dirname, 'output.json')
let jsonData = {}

const readJSONFile = async (file) => {
    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) return console.log(err)

        jsonData = JSON.parse(data)
        console.log(jsonData)
    })
}

fs.watchFile(jsonFile, function (a, b) {
    console.log('file changed')
    readJSONFile(jsonFile)
})

readJSONFile(jsonFile)