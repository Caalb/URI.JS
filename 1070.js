var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var [num] = input.split(" ").map(item => parseInt(item))

for(let i = num; (i < (num + 12)); i++) {
    if((i % 2) !== 0) {
        console.log(i)
    }
}