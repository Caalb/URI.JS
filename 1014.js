var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let km = parseInt(lines.shift())
let litros = parseFloat(lines.shift())
let consumoPorKm =  km / litros

console.log(`${consumoPorKm.toFixed(3)} km/l`)