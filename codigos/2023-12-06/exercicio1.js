/**
 * Fazer um programa que solicita 5 idades:
 * - Mostra quem tem a maior idade
 * - Mostra quem tem a menor idade
 * - Mostra todas as idades digitadas
 */
const prompt = require('prompt-sync')({sigint: false});

var idades = [];
var menorIdade = 999;
var maiorIdade = 0;


for(let i=0; i<5; i++) {
  let idade = parseInt(prompt("Digite a idade: "));
  idades.push(idade);

  if(idade > maiorIdade) {
    maiorIdade = idade;
  }

  if(idade < menorIdade) {
    menorIdade = idade;
  }
}

console.log("\nIdades digitadas: ");
for(let j=0; j<5; j++) {
  console.log(idades[j]);
}

console.log("Maior idade: ", maiorIdade);
console.log("Menor idade: ", menorIdade);