var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var numeros = [a, b, c] = lines[0].split(" ").map(item => parseFloat(item))

numeros.sort((a, b) => b - a)

a = numeros.shift()
b = numeros.shift()
c = numeros.shift()

if (a >= (b + c)) console.log('NAO FORMA TRIANGULO')
    else if (Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))) console.log("TRIANGULO RETANGULO")
        else if (Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))) console.log("TRIANGULO OBTUSANGULO")
            else if (Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))) console.log("TRIANGULO ACUTANGULO")
if (a === b & b === c) console.log("TRIANGULO EQUILATERO")
if (((a === b) && (a != c)) || ((a === c) && (a != b) || ((b === c) && (b != a)))) console.log('TRIANGULO ISOSCELES')
