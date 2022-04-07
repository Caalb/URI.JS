var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valores = lines.shift().split(" ")
let A = parseFloat(valores.shift())
let B = parseFloat(valores.shift())
let C = parseFloat(valores.shift())

let delta = (Math.pow(B, 2)) - (4 * A * C)
let x1 = (- B + Math.sqrt( delta )) / (2 * A)
let x2 = (- B - Math.sqrt( delta )) / (2 * A)

if(A * 2 === 0 || delta < 0) {
    return console.log('Impossivel calcular')
} 
console.log(`R1 = ${x1.toFixed(5)}`)
console.log(`R2 = ${x2.toFixed(5)}`)
