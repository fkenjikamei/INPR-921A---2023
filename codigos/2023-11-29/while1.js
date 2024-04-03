const prompt = require('prompt-sync')({sigint: false});

numero = 0;

while(numero >= 0) {
    numero = Number(prompt("Digite um número: "));
}