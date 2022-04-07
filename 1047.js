var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

[horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(" ").map(item => parseInt(item))
var hora, minutos

if(horaInicial > horaFinal) {
    hora = (24 - horaInicial) + horaFinal
} else if(horaInicial < horaFinal) {
    hora = (horaFinal - horaInicial)
} else hora = 24


if(minutoInicial > minutoFinal) {
    hora = hora - 1
    minutos = 60 + (minutoFinal - minutoInicial)
} else if(minutoFinal == minutoInicial) {
    minutos = 0
} else minutos = (minutoFinal - minutoInicial)
if(hora === 24 && minutos !== 0) hora = 0

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minutos} MINUTO(S)`)
