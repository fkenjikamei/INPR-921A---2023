const prompt = require('prompt-sync')({sigint: false});

var numeroSecreto = Math.floor(Math.random() * 100);
var isAcertou = false;
var qtdChutes = 0;

console.log(numeroSecreto);

do {
    console.log("Jogo de Adivinhação");
    console.log("Chute um número de 1 a 100");
    let chute = parseInt(prompt("Qual o seu chute?"));

    qtdChutes++;

    if(chute == numeroSecreto) {
        isAcertou = true;
    }
} while(isAcertou == false);

console.log(`Acertou com ${qtdChutes} chute(s)`);