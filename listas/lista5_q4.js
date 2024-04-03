const prompt = require('prompt-sync')({sigint: false});

var qtdAlunos = 0;
var contador = 0;
var contAprovados = 0;
var contReprovados = 0;

qtdAlunos = parseInt(prompt("Qual a quantidade de alunos: "));

while(contador < qtdAlunos) {
  var resposta = prompt("Aprovado (A) ou Reprovado (R)? ");

  if(resposta == "A" || resposta == "a" || resposta == "R" || resposta == "r") {
    if(resposta == "A" || resposta == "a") {
      contAprovados++;
    } else {
      contReprovados++;
    }
    contador++;
  } else {
    console.log("Valor digitado foi inválido.")
  }
}

console.log("Aprovados: ", contAprovados);
console.log("Reprovados: ", contReprovados);