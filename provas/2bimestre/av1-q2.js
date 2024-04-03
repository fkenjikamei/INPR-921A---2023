const prompt = require('prompt-sync')({sigint: false});

var numero = parseInt(prompt("Digite um número para apresentar o seu fatorial: "));

var resultado = numero;

for(let i = 1; i < numero; i++) {
    resultado *= i;
}

console.log(`>> Fatorial de ${numero} é = ${resultado}`);