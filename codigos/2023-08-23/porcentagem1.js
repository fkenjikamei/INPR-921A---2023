const prompt = require('prompt-sync')({sigint: false});

var numero = parseInt(prompt("Quanto dinheiro você tem? "));
var porcentagem = parseFloat(prompt("Qual a porcentagem você quer dividir com a turma? "));
var resultado = numero * (porcentagem/100);
console.log("Resultado: ",resultado);