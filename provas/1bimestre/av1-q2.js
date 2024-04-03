/*
* 2. Supondo que o metal latão é constituído de 70% de cobre e 30% de zinco, faça um programa que mostre a quantidade de cada um dos componentes para se obter uma certa quantidade de latão. Sendo a quantidade de latão informada pelo usuário (em kg).
*/

const prompt = require('prompt-sync')({sigint: false});

var quantidade_latao = prompt("Digite a quantidade de latão (em kg): ")
var quantidade_cobre = quantidade_latao * 0.7
var quantidade_zinco = quantidade_latao * 0.3

console.log("Quantidade de cobre: ", quantidade_cobre)
console.log("Quantidade de zinco: ", quantidade_zinco)