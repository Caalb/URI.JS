var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = input.split('\n').map(item => parseInt(item))

let dentro = 0
let fora = 0

for(let i = 1; i < a.length; i++) {
    if(a[i] >= 10 && a[i] <= 20) {
        dentro++
    } else fora++
}

console.log(`${dentro} in`)
console.log(`${fora} out`)

