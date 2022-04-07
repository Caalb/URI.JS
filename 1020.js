var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift()

let anos = parseInt(valor/365)
valor = valor % 365
let mes = parseInt(valor/30)
valor = valor % 30
let dias = parseInt(valor)
console.log(`${anos} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dias} dia(s)`)