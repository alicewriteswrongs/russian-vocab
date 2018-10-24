const fs = require("fs")
const { stringify } = require("csv")

const words = JSON.parse(fs.readFileSync("./words.json"))

stringify(words, (err, output) => {
  fs.writeFileSync("words.csv", output)
})
