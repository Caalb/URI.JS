var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var numeros = input.split('\n').map(item => parseInt(item))

var pares = 0, impares = 0, positivos = 0, negativos = 0

for (let i = 0; i < 5; i++) {
    if (numeros[i] % 2 === 0) pares++
    if (numeros[i] % 2 !== 0) impares++
    if (numeros[i] > 0) positivos++
    if (numeros[i] < 0) negativos++
    
}

console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)
