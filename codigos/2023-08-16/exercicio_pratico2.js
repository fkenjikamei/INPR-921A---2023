const prompt = require('prompt-sync')({sigint: false});

var nota1 = parseFloat(prompt("Digite a 1a nota: "));
var nota2 = parseFloat(prompt("Digite a 2a nota: "));

var media = (nota1+nota2)/2;

if(media >= 4 && media < 6) {
    console.log("Recuperação")
} else if(media >= 6) {
    console.log("Aprovado direto");
} else if(media < 4) {
    console.log("Reprovado direto");
}