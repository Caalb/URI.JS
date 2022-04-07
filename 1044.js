var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numeros = [a, b] = lines[0].split(" ").map(item => parseInt(item))
let numerosSlice = numeros.slice()
numerosSlice.sort((a, b) => a - b)

if(Number.isInteger( numerosSlice[1] / numerosSlice[0])) console.log('Sao Multiplos')
    else console.log('Nao sao Multiplos')