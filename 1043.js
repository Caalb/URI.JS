var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var [a, b, c] = lines[0].split(" ").map(item => parseFloat(item))

// A soma de quais dois de seus lado deve ser maior que o terceiro. 

let condicaoTriangulo1 = a + b > c
let condicaoTriangulo2 = b + c > a
let condicaoTriangulo3 = a + c > b

var formulaTrapezio, perimetro

if( condicaoTriangulo1 && condicaoTriangulo2 && condicaoTriangulo3 ) {
    perimetro = (a + b + c)
    console.log(`Perimetro = ${perimetro.toFixed(1)}`)

} else {
    formulaTrapezio = ((a + b) * c) / 2
    console.log(`Area = ${formulaTrapezio.toFixed(1)}`)
}
