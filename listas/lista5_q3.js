/*
Q3. Escreva um algoritmo que possui um número secreto de 1 a 100, e fica pedindo que o usuário digite um número inteiro de 1 a 100 até acertar o número secreto. Quando acertar, informar com quantos chutes ele conseguiu acertar o número.
*/

const prompt = require('prompt-sync')({sigint: false});

var numeroSecreto = parseInt(Math.random() * 100);
console.log(numeroSecreto);

var acertou = false;
var qtdChutesDados = 0;

while(acertou == false) {
  chute = parseInt(prompt("Qual o seu chute?"));

  qtdChutesDados += 1;

  if(chute == numeroSecreto) {
    console.log("Acertou!");
    acertou = true;
  }
}

console.log("Quantidade chutes dados: ",qtdChutesDados);