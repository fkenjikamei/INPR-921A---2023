const prompt = require("prompt-sync")();

var numeroSecreto = parseInt(Math.random()*10);

var acertou = false;

while(acertou == false) {
    console.log("Jogo de adivinhação");
    var chute = parseInt(prompt("Qual o seu chute? "));

    if(chute == numeroSecreto) {
        console.log("Parabéns, você acertou o número secreto!");
        acertou = true;
    } else if(chute > numeroSecreto) {
        console.log("Chute foi maior que o número secreto");
    } else {
        console.log("Chute foi menor que o número secreto");
    }
}