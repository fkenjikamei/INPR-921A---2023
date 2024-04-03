/*
Q2. Escreva um algoritmo que leia o nome e a altura de 10 pessoas, e imprima o nome da maior e da menor pessoa.
*/
const prompt = require('prompt-sync')({sigint: false});

var qtdPessoasLidas = 1;
var maiorPessoa = "";
var menorPessoa = "";
var maiorAltura = 999;
var menorAltura = 999;

while(qtdPessoasLidas <= 4) {
  let nome = prompt("Qual o nome da pessoa? ");
  let altura = parseFloat(prompt("Qual a altura? "));

  if(qtdPessoasLidas == 1) {
    maiorPessoa = nome;
    maiorAltura = altura;
    menorPessoa = nome;
    menorAltura = altura;
  } else {
    if(altura > maiorAltura) {
      maiorAltura = altura;
      maiorPessoa = nome;
    }
    if(altura < menorAltura) {
      menorAltura = altura;
      menorPessoa = nome;
    }
  }

  qtdPessoasLidas++;
}

console.log(`Maior pessoa: ${maiorPessoa}. Altura: ${maiorAltura}`);
console.log(`Menor pessoa: ${menorPessoa}. Altura: ${menorAltura}`);

//console.log("nome = ", nome); //dá erro porque a variável nome é do escopo de let, só existe no escopo onde foi criada.