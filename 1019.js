var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift()
// 1 hora = 3600 segundos
// 1 minuto = 60 segundos

let horas = parseInt(valor / 3600)
valor = valor % 3600
let minutos = parseInt(valor / 60)
valor = valor % 60
let segundos = parseInt(valor / 1 )
console.log(`${horas}:${minutos}:${segundos}`)