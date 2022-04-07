var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var [salario] = lines[0].split(" ").map(item => parseFloat(item))


if (salario >= 0 && salario <= 2000) console.log('Isento')
else
    if (salario >= 2000.01 && salario <= 3000.00) {
        tx = (salario - 2000.00) * (8 / 100)
        console.log(`R$ ${tx.toFixed(2)}`)
    }
    else
        if (salario >= 3000.01 && salario <= 4500.00) {
            tx = 80 + (18 / 100) * (salario - 3000.00)
            console.log(`R$ ${tx.toFixed(2)}`)
        }
        else
            if (salario > 4500) {
                tx = (80 + 270) + (28 / 100) * (salario - 4500.00);
                console.log(`R$ ${tx.toFixed(2)}`)
            }
