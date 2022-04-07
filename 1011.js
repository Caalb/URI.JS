var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let raio = parseFloat(lines.shift())
let calculaVolume = ((4/3) * 3.14159 * Math.pow(raio, 3)).toFixed(3)

console.log(`VOLUME = ${calculaVolume}`)