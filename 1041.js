var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var [X, Y] = lines[0].split(' ').map(item => parseFloat(item));
if(X > 0 && Y > 0) 
    console.log('Q1')
else if(X > 0 && Y < 0) 
    console.log('Q4')
else if(X < 0 && Y < 0) 
    console.log('Q3')
else if(X < 0 && Y > 0) 
    console.log('Q2')
else if(X === 0 && Y === 0) 
    console.log('Origem')
else if(Y === 0) 
    console.log("Eixo X")
else 
    console.log("Eixo Y")

