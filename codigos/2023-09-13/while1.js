const prompt = require('prompt-sync')({sigint: false});

var qtdChutes = 0;

var numeroSecreto = parseInt(Math.random() * 20);
console.log(numeroSecreto);

console.log("Exemplo 1");

while(qtdChutes < 2) {
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