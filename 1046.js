var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var numeros = [horaInicial, horaFinal] = lines[0].split(" ").map(parseFloat)
var hora 
if(horaInicial >= horaFinal) {
    hora = (24 - horaInicial) + horaFinal
    console.log(`O JOGO DUROU ${hora} HORA(S)`)
} else {
    hora = (horaFinal - horaInicial)
    console.log(`O JOGO DUROU ${hora} HORA(S)`)
}