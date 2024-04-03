const prompt = require('prompt-sync')({sigint: false});
var somaIdades = 0;

for(let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt("Qual a sua idade? "));
    somaIdades += idade;
}

console.log("Média das idades = "+(somaIdades/10));