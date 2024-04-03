/**
 * 4. Faça um programa que lê uma temperatura da água em graus Celsius e apresenta a conversão em graus Fahrenheit.
A fórmula de conversão é: F = (9 * C + 160) / 5, onde F é a temperatura em Fahrenheit e C é a temperatura em Celsius.

Após converter, apresentar a conversão, informar se a temperatura da água atingiu o ponto de ebulição ou não. Sabendo que a temperatura para atingir o estado de ebulição, deve ser igual ou maior do que 100o C.
 */

const prompt = require('prompt-sync')({sigint: false});

var temperatura_celsius = Number(prompt("Digite a temperatura da água em graus Celsius: "))
var temperatura_fahrenheit = (9 * temperatura_celsius + 160) / 5

console.log("Temperatura em Fahrenheit: ", temperatura_fahrenheit)

if (temperatura_celsius >= 100) {
    console.log("A água está em estado de ebulição.")
}
else {
    console.log("A água não está em estado de ebulição.")
}