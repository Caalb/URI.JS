var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var [num] = lines[0].split(' ').map(item => parseInt(item))

var impares = 0

for(let i = 1; i <= num; i++) {
  if((i % 2) !== 0) {
      console.log(i)
  }  
}