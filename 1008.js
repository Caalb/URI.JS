var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero = parseInt(lines.shift())
let horas = parseInt(lines.shift())
let valorPorHora = parseFloat(lines.shift())
let salario = horas * valorPorHora

console.log(`NUMBER = ${numero}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
