/* 

*/
const prompt = require('prompt-sync')({sigint: false});


var nota = Number(prompt("Digite a nota: "))

if(nota >= 6) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}