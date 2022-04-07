var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x, y] = input.split('\n').map(item => parseInt(item)) 

let min, max;

if(x > y) {
    max = x
    min = y
} else {
    min = x
    max = y
}

let soma = 0

for(let i = min + 1; i < max; i++) {
    if(i % 2 !== 0) {
        soma += i
    }
}

console.log(soma)