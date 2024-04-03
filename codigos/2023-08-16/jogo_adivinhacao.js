/**
 * Jogo de adivinhação
 * Onde teremos um número secreto de 1 a 20, e a pessoa tem que acertar o número.
 * 
 * Se a pessoa acertar, emite a mensagem "Parabéns!".
 * Agora se a pessoa errar, precisamos informar se o chute foi maior ou menor que o número secreto.
 */
const prompt = require('prompt-sync')({sigint: false});

var numeroSecreto = parseInt(Math.random() * 21);
console.log(numeroSecreto);

var chute = parseInt(prompt("Qual o seu chute? "))

if(chute == numeroSecreto) {
    console.log("Parabéns");
} else if(chute > numeroSecreto) {
    console.log("Chute foi maior que o número secreto!");
} else {
    console.log("Chute foi menor que o número secreto!")
}