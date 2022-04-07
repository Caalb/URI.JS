var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var numeros = [num1, num2, num3] = lines[0].split(' ').map(item => parseFloat(item))
var numerosUnsorted = numeros.slice()

for (let i = 0; i < 3; i++) {
    numeros.sort((a, b) => a - b)
    console.log(numeros.shift())
}

console.log()

for (let i = 0; i < 3; i++) {
    console.log(numerosUnsorted.shift())
}
 



