var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");var input = require("fs").readFileSync("stdin", "utf8")

let valor = lines.shift().split(" ")
let A = parseInt(valor.shift())
let B = parseInt(valor.shift())
let C = parseInt(valor.shift())
let D = parseInt(valor.shift())

if(B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
    return console.log("Valores aceitos")
} else return console.log('Valores nao aceitos')