const prompt = require('prompt-sync')({sigint: false});

var nome;
var anoNascimento;
var idade;

function entradaDados() {
    nome = prompt("Qual o seu nome? ");
    anoNascimento = parseInt(prompt("Digite o ano em que nasceu: "));
}

function calculaIdade() {
    let anoAtual = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
}

function exibirResultado() {
    console.log(`Até o final de 2024, terá ${idade} anos`);
}

entradaDados();
calculaIdade();
exibirResultado();