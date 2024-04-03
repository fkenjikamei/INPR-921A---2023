const prompt = require('prompt-sync')({sigint: false});

var numero1 = parseInt(prompt("Digite o 1o número inteiro: "))
var numero2 = parseInt(prompt("Digite o 2o número inteiro: "))
var numero3 = parseInt(prompt("Digite o 3o número inteiro: "))
var numero4 = parseInt(prompt("Digite o 4o número inteiro: "))
var numero5 = parseInt(prompt("Digite o 5o número inteiro: "))

var maior;
var menor;

if(numero1 > numero2 && numero1 > numero3 && numero1 > numero4 && numero1 > numero5) {
  maior = numero1;
} else if(numero2 > numero1 && numero2 > numero3 && numero2 > numero4 && numero2 > numero5) {
  maior = numero2;
} else if(numero3 > numero1 && numero3 > numero2 && numero3 > numero4 && numero3 > numero5) {
  maior = numero3;
} else if(numero4 > numero1 && numero4 > numero2 && numero4 > numero3 && numero4 > numero5) {
  maior = numero4;
} else if(numero5 > numero1 && numero5 > numero2 && numero5 > numero3 && numero5 > numero4) {
  maior = numero5;
}

if(numero1 < numero2 && numero1 < numero3 && numero1 < numero4 && numero1 < numero5) {
  menor = numero1;
} else if(numero2 < numero1 && numero2 < numero3 && numero2 < numero4 && numero2 < numero5) {
  menor = numero2;
} else if(numero3 < numero1 && numero3 < numero2 && numero3 < numero4 && numero3 < numero5) {
  menor = numero3;
} else if(numero4 < numero1 && numero4 < numero2 && numero4 < numero3 && numero4 < numero5) {
  menor = numero4;
} else if(numero5 < numero1 && numero5 < numero2 && numero5 < numero3 && numero5 < numero4) {
  menor = numero5;
}

console.log(`Maior número é ${maior}`);
console.log(`Menor número é ${menor}`);