var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var [salario] = lines[0].split(" ").map(item => parseFloat(item))
var novoSalario, reajuste, percentual
if ( salario >= 0 && salario <= 400 )  
{
    novoSalario = salario + ( 15/100 * salario )
    reajuste = novoSalario - salario
    percentual = 15 

} else if( salario >= 400.01 && salario <= 800 ) 
{
    novoSalario = salario + ( 12/100 * salario )
    reajuste = novoSalario - salario
    percentual = 12

} else if( salario >= 800.01 && salario <= 1200 )
{
    novoSalario = salario + ( 10/100 * salario ) 
    reajuste = novoSalario - salario
    percentual = 10

} else if( salario >= 1200.01 && salario <= 2000) 
{
    novoSalario = salario + ( 7/100 * salario ) 
    reajuste = novoSalario - salario
    percentual = 7

} else 
{
    novoSalario = salario + ( 4/100 * salario ) 
    reajuste = novoSalario - salario
    percentual = 4
}

console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${percentual} %`)