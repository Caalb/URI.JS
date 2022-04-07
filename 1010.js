
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let infoItem1 = lines.shift().split(" ")
let infoItem2 = lines.shift().split(" ")

let codPeca1 = infoItem1.shift()
let numeroPeca1 = parseInt(infoItem1.shift())
let valorPeca1 = parseFloat(infoItem1.shift())

let codPeca2 = infoItem2.shift()
let numeroPeca2 = parseInt(infoItem2.shift())
let valorPeca2 = parseFloat(infoItem2.shift())


let valorTotalAPagar = (valorPeca1 * numeroPeca1) + (numeroPeca2 * valorPeca2)

console.log(`VALOR A PAGAR: R$ ${valorTotalAPagar.toFixed(2)}`)
console.log(numeroPeca1)