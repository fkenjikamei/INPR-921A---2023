/**
 * Faça um programa que fica solicitando um número inteiro e só para de pedir um novo número, quando forem digitados 5 números positivos.
 */
const prompt = require("prompt-sync")();


var qtdNumerosPositivosDigitados = 0;

while(qtdNumerosPositivosDigitados < 5) {
    var numero = parseInt(prompt("Digite um número: "));

    if(numero >= 0) {
        qtdNumerosPositivosDigitados += 1;
    }
}