var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = input.split('\n').map(item => parseFloat(item))
let quantidade = 0

for(let i = 0; i < 6; i++) {
    if( a[i] > 0) {
        quantidade++
    } 
} 

console.log(`${quantidade} valores positivos`)