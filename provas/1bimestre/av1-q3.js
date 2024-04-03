/*
* 3. Faça um programa que apresenta o salário líquido de um funcionário. Para isso, o programa deve:
Solicitar a quantidade de horas trabalhadas no mês; e
Calcular o valor ganho por 1 hora trabalhada em 32,00 reais, e o imposto a ser descontado sobre o total do salário é de 27%.
*/

const prompt = require('prompt-sync')({sigint: false});

var quantidade_horas = Number(prompt("Digite a quantidade de horas trabalhadas no mês: "))
var valor_hora = 32
var salario_bruto = quantidade_horas * valor_hora
var valor_impost_pago = salario_bruto * 0.27
var salario_liquido = salario_bruto - valor_impost_pago

console.log("Salário bruto: ", salario_bruto)
console.log("Valor do imposto pago: ", valor_impost_pago)
console.log("Salário líquido: ", salario_liquido)
console.log(parseFloat(prompt("Digite um número inteiro: ")))