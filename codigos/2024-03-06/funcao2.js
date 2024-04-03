const prompt = require('prompt-sync')({sigint: false});

var nome = prompt("Qual o seu nome? ");
var anoNascimento = parseInt(prompt("Digite o ano em que nasceu: "));
var anoAtual = new Date().getFullYear();

idade =  anoAtual - anoNascimento;

console.log(`Até o final de 2024, terá ${idade} anos`);