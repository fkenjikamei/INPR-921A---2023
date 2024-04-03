const prompt = require('prompt-sync')({sigint: false});

var qtdChances = 0;
var qtdChutes = 0;

var numeroSecreto = parseInt(Math.random() * 20);
console.log(numeroSecreto);

console.log("Exemplo 3");

console.log("Níveis do jogo");
console.log("Nivel 1: 7 chances");
console.log("Nivel 2: 5 chances");
console.log("Nivel 3: 3 chances");
nivel = parseInt(prompt("Escolha o nível: "));

if(nivel == 1) {
  qtdChances = 7;
} else if(nivel == 2) {
  qtdChances = 5;
} else if(nivel == 3) {
  qtdChances = 3;
}

while(qtdChutes < qtdChances) {
  console.log("Dê um chute de 0 a 20: ");
  var chute = prompt();

  qtdChutes += 1;
  
  if(chute == numeroSecreto) {
    console.log("Acertou!");
    break;
  } else if(chute < numeroSecreto) {
    console.log("Chute foi menor que o número secreto");
  } else {
    console.log("Chute foi maior que o número secreto")
  }
}