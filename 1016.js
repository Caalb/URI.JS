var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let km = parseInt(lines.shift())
let calculo = km * 2

console.log(`${calculo} minutos`)