var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var [n1, n2, n3, n4] = lines[0].split(" ").map(item => parseFloat(item))
let media = ((n1 * 2) + ( n2 * 3 ) + ( n3 * 4) + (n4 * 1)) / ( 2 + 3 + 4 + 1)

console.log(`Media: ${media.toFixed(1)}`)

if(media >= 7.0)
    console.log('Aluno aprovado.')
else if(media < 5) 
    console.log('Aluno reprovado.')
else if(media >= 5 && media <= 6.9) {
    console.log('Aluno em exame.')
    var [notaExame] = lines[1].split(" ").map(item => parseFloat(item))
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

    let mediaExame = (media + notaExame) / 2
    if(mediaExame >= 5)
        console.log('Aluno aprovado.')
    else 
        console.log('Aluno reprovado.')

    console.log(`Media final: ${mediaExame.toFixed(1)}`)
}