var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let tempoHoras = parseInt(lines.shift())
let velocidadeMedia = parseInt(lines.shift())
let distancia = tempoHoras * velocidadeMedia
let calculo = distancia / 12 

console.log(calculo.toFixed(3))