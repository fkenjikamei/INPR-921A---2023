/*
Q5. Escreva um algoritmo que leia um valor inicial A e imprima a sequência de valores do cálculo de A! e o seu resultado. 
Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120
Utilize o loop while para resolver esta questão.
*/
const prompt = require('prompt-sync')({sigint: false});

var fat = 1;

console.log("Fatorial")
var numero = parseInt(prompt("Digite um número interior positivo: "));

if(numero > 0) {
  while(numero > 0) {
    fat *=numero;
    numero--;
  }
} else {
  console.log("Número inválido!");
}

console.log("Fatorial = ", fat);