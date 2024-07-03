const prompt = require("prompt-sync")({sigint:false});

const conta = require('./revisao4-funcoes1');

do {
  console.log("Terminal bancário");
  console.log("1 - Saldo")
  console.log("2 - Depositar");
  console.log("3 - Sacar");
  console.log("4 - Sair");
  
  var opcao = prompt("Escolha uma opção: ");
  switch(opcao) {
    case '1':
      console.log("Saldo: "+conta.retornaSaldo());
      prompt();
      break;
    case '2':
      let valorDeposito = parseFloat(prompt("Qual o valor do depósito? "));
      conta.depositar(valorDeposito); 
      break;
    case '3':
      let valorSaque = parseFloat(prompt("Qual o valor do saque? "));
      conta.sacar(valorSaque); 
      break;
    case '4': console.log("Bye"); break;
  }

} while(opcao != 4);