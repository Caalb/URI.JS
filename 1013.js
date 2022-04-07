var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let nums = lines.shift().split(" ")

let A = parseInt(nums.shift())
let B = parseInt(nums.shift())
let C = parseInt(nums.shift())

let formula = ((A + B + Math.abs(A - B)) / 2)

if(formula < C) {
    return console.log(`${C} eh o maior`)
} else {
    return console.log(`${formula} eh o maior`)
}