var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valores = lines.shift().split(" ")
let codigo = parseInt(valores.shift())
let quantidade = parseInt(valores.shift())
let resp = 0

if(codigo == 1) {
    resp = 4.0 * quantidade
} else if(codigo == 2) {
    resp = 4.5 * quantidade
} else if(codigo == 3) {
    resp = 5.0 * quantidade
} else if(codigo == 4) {
    resp = 2.0 * quantidade
} else if(codigo == 5) {
    resp = 1.5 * quantidade
}

console.log(`Total: R$ ${resp.toFixed(2)}`)