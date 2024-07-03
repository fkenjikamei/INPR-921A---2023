const prompt = require("prompt-sync")({sigint:false});

//Só vai parar de digitar quando tivermos digitadas 5 números inteiros positivos

var numerosInteirosPositivos = [];

while(numerosInteirosPositivos.length < 5) {
  let numero = parseInt(prompt("Digite um número: "));

  if(numero >= 0) {
    numerosInteirosPositivos.push(numero);
  }
}

console.log("Numeros digitados: "+numerosInteirosPositivos);