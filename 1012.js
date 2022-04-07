var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let nums = lines.shift().split(" ")

let A = parseFloat(nums.shift())
let B = parseFloat(nums.shift())
let C = parseFloat(nums.shift())

console.log(`TRIANGULO: ${((A * C) / 2).toFixed(3) }`)
console.log(`CIRCULO: ${(3.14159 * Math.pow(C, 2)).toFixed(3)}`)
console.log(`TRAPEZIO: ${(((A + B) * C) / 2).toFixed(3)}`)
console.log(`QUADRADO: ${(B * B).toFixed(3)}`)
console.log(`RETANGULO: ${(A * B).toFixed(3)}`)