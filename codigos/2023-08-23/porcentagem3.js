/**
 * Uma água viva é composta de 98% de água, e 2% de matéria orgânica.
 * 
 * Faça um programa que pede o peso da água viva em KG, e informa quanto desse peso é de água, e quanto é de matéria orgânica. Sabendo que 98% da água viva é formado por água, e apenas 2% de matéria orgânica.
 */
const prompt = require('prompt-sync')({sigint: false});

var pesoAguaViva = parseFloat(prompt("Qual o peso da água viva em KG? "))

var pesoAgua = pesoAguaViva * 0.98;
var pesoMateriaOrganica = pesoAguaViva * 0.02;

console.log(`Peso da água = ${pesoAgua}kg.`)
console.log(`Peso da matéria orgânica = ${pesoMateriaOrganica}kg.`)
