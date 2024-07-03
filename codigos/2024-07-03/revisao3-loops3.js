const prompt = require("prompt-sync")({sigint:false});

const capacidade = 5;
var qtdPessoasQueEntraram = 0;

do {
  console.log("Entrada para a feira");
  qtdPessoas = parseInt(prompt("Quantas pessoas irão entrar? "));
  qtdPessoasQueEntraram = qtdPessoasQueEntraram + qtdPessoas;
}while(qtdPessoasQueEntraram < capacidade);

console.log("Capacidade atingida!");