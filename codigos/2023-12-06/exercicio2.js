/**
 * Fazer um programa que solicita 5 idades:
 * 1. Não pode aceitar idade menor que 1 
 * 2. Não pode aceitar idade maior que 140 
 * 3. Não pode aceitar idade repetida 
 * 4. Quando uma idade não é válida, não deve reduzir da quantidade de idades a serem soliciadas
 * 5. Mostra quem tem a maior idade
 * 6. Mostra quem tem a menor idade
 * 7. Mostra todas as idades digitadas
 */

const prompt = require('prompt-sync')({sigint: false});

var idades = [];
var menorIdade = 999;
var maiorIdade = 0;
var idadeDigitada;


for(let i=0; i<5; i++) {
  idadeDigitada = false;
  let idade = parseInt(prompt("Digite a idade: "));

  if(idade < 1 || idade > 140) {
    console.log("Por favor, digite uma idade válida!");
    i--;
  }
  else {
    for(let j=0; j<idades.length; j++) {
      if(idade == idades[j]) {
        console.log("Idade já digitada");
        i--;
        idadeDigitada = true;
      }
    }

    if(idadeDigitada == false) {
      idades.push(idade);

      if(idade > maiorIdade) {
        maiorIdade = idade;
      }
    
      if(idade < menorIdade) {
        menorIdade = idade;
      }
    }
  }
}

console.log("\nIdades digitadas: ");
for(let j=0; j<5; j++) {
  console.log(idades[j]);
}

console.log("Maior idade: ", maiorIdade);
console.log("Menor idade: ", menorIdade);