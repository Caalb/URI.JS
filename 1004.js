var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())

console.log(`PROD = ${a * b}`)