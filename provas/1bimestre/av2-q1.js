/**
 * Q1. (4.0 pontos) Cálculo de salário
Faça um programa que solicite que o usuário digite o valor de quanto um funcionário ganha por hora e o número de horas trabalhadas por esse funcionário no mês. Após, mostrar o valor do salário bruto, que corresponde o valor da hora * número de horas trabalhadas, e o salário líquido, que corresponde ao salário bruto menos o imposto de renda, INSS, e o valor do sindicato. Sabendo que, o valor do Imposto de Renda é de 11%, INSS de 8% e o sindicato de 5% do valor do salário bruto.
 * 
 */

const prompt = require("prompt-sync")();

// Entrada
var valorHora = Number(prompt("Digite o valor da hora: "));
var horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas: "));

// Processamento
var salarioBruto = valorHora * horasTrabalhadas;
var impostoRenda = salarioBruto * 0.11;
var inss = salarioBruto * 0.08;
var sindicato = salarioBruto * 0.05;
var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

// Saída
// var valor = 3.2902942;
// console.log(valor.toFixed(2))
console.log("Salário bruto: R$ " + salarioBruto.toFixed(2));
console.log("Imposto de renda: R$ " + impostoRenda.toFixed(2));
console.log("INSS: R$ " + inss.toFixed(2));
console.log("Sindicato: R$ " + sindicato.toFixed(2));
console.log("Salário líquido: R$ " + salarioLiquido.toFixed(2));