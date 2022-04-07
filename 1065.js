var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var numeros = input.split('\n').map(item => parseInt(item))

let quantidade = 0
for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        quantidade++
    } 
}

console.log(`${quantidade} valores pares`)