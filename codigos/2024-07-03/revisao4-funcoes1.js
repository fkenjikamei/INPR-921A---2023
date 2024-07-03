const prompt = require("prompt-sync")({sigint:false});

var saldo = 0.0;

function retornaSaldo() {
  return saldo;
}

function depositar(valorDeposito) {
  if(valorDeposito > 0) {
    saldo += valorDeposito;
    console.log(`Depósito de ${valorDeposito} realizado com sucesso`);
    console.log(`Novo saldo: ${saldo}`);
  } else {
    console.log("Valor do depósito deve ser maior que o");
  }
  prompt();
}

function sacar(valorSaque) {
  if(saldo >= valorSaque) {
    saldo -= valorSaque;
    console.log(`Saque de ${valorSaque} reais realizado com sucesso`);
    console.log(`Novo saldo: ${saldo}`);
  } else {
    console.log("Saldo insuficiente");
  }
  prompt();
}

module.exports = {
  depositar,
  sacar, 
  retornaSaldo
};