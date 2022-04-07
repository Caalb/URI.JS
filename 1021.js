var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");var input = require("fs").readFileSync("stdin", "utf8");

let valor = parseFloat(lines.shift()) 

let notas100 = parseInt(valor/100)
valor = valor % 100

let notas50 = parseInt(valor/50)
valor = valor % 50

let notas20 = parseInt(valor/20)
valor = valor % 20

let notas10 = parseInt(valor/10)
valor = valor % 10

let notas5 = parseInt(valor/5)
valor = valor % 5

let notas2 = parseInt(valor/2)
valor = valor % 2 

let moeda1 = parseInt(valor/1)
valor = valor % 1 


let moeda50 = parseInt(valor/ 0.50)
valor = valor % 0.50 


let moeda25 = parseInt(valor/ 0.25)
valor = valor % 0.25 

let moeda10 = parseInt(valor/ 0.10)
valor = valor % 0.10 


let moeda005 = parseInt(valor/ 0.05)
valor = valor % 0.05 


let moeda001 = parseInt(valor/ 0.01)

console.log('NOTAS:')
console.log(`${notas100} nota(s) de R$ 100.00`)
console.log(`${notas50} nota(s) de R$ 50.00`)
console.log(`${notas20} nota(s) de R$ 20.00`)
console.log(`${notas10} nota(s) de R$ 10.00`)
console.log(`${notas5} nota(s) de R$ 5.00`)
console.log(`${notas2} nota(s) de R$ 2.00`)
console.log('MOEDAS:')
console.log(`${moeda1} moeda(s) de R$ 1.00`)
console.log(`${moeda50} moeda(s) de R$ 0.50`)
console.log(`${moeda25} moeda(s) de R$ 0.25`)
console.log(`${moeda10} moeda(s) de R$ 0.10`)
console.log(`${moeda005} moeda(s) de R$ 0.05`)
console.log(`${moeda001} moeda(s) de R$ 0.01`)