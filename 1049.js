var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var espec1 = (lines[0].split()[0].replace('\r', '')).toString()
var espec2 = (lines[1].split()[0].replace('\r', '')).toString()
var espec3 = (lines[2].split()[0].replace('\r', '')).toString()


if (espec1 === 'vertebrado') {
    if (espec2 === 'ave') {
        if (espec3 === 'carnivoro') {
            console.log('aguia')
        }
        else console.log('pomba')
    } else
        if (espec3 === 'onivoro') {
            console.log('homem')
        }
        else console.log('vaca')
}

if (espec1 === 'invertebrado') {
    if (espec2 === 'inseto') {
        if (espec3 === 'hematofago') {
            console.log('pulga')
        }
        else console.log('largarta')
    } else
        if (espec3 === 'hematofago') {
            console.log('sanguessuga')
        } else
            console.log('minhoca')
}
