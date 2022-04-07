var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let nome = lines.shift()
let salarioFixo = parseFloat(lines.shift())
let totalVendas = parseFloat(lines.shift())
let salarioReceber = (salarioFixo + 0.15 * totalVendas).toFixed(2)

console.log(`TOTAL = R$ ${salarioReceber}`)