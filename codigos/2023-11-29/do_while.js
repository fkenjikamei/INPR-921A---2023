const prompt = require('prompt-sync')({sigint: false});

var numero;

do {
    numero = Number(prompt("Digite um número: "));
} while(numero >=0);