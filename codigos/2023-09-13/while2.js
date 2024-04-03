const prompt = require('prompt-sync')({sigint: false});

acertou = false;
var numeroSecreto = parseInt(Math.random() * 20);
console.log(numeroSecreto);

console.log("Exemplo 2");

while(acertou == false) {
  console.log("Dê um chute de 0 a 20: ");
  var chute = prompt();
  
  if(chute == numeroSecreto) {
    acertou = true;
    console.log("Acertou!");
  } else if(chute < numeroSecreto) {
    console.log("Chute foi menor que o número secreto");
  } else {
    console.log("Chute foi maior que o número secreto")
  }
}