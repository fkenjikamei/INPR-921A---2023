const prompt = require("prompt-sync")();

qtdIdadesSolicitadas = 0;
somaIdades = 0;

while (qtdIdadesSolicitadas < 5) {
    qtdIdadesSolicitadas += 1;
    idade = parseInt(prompt("Qual a idade? "));
    somaIdades += idade;
}

mediaIdades = somaIdades/5;
console.log(`Média das idades digitadas: ${mediaIdades}`);