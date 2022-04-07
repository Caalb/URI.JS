var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let num1 = lines.shift().split(" ")
let num2 = lines.shift().split(" ")

let x1 = parseFloat(num1.shift())
let y1 = parseFloat(num1.shift())
let x2 = parseFloat(num2.shift())
let y2 = parseFloat(num2.shift())
let formulaDistancia  = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

console.log(formulaDistancia.toFixed(4))