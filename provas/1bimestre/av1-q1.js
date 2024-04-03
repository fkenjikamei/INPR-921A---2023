/*
 *  1. Faça um programa que lê um número inteiro e imprime o seu antecessor e o seu sucessor. 

 */

const prompt = require('prompt-sync')({sigint: false});

var numero = Number(prompt("Digite um número inteiro: "))

console.log("Antecessor: ", (numero-1))
console.log("Sucessor: ", (numero+1))