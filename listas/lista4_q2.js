const prompt = require('prompt-sync')({sigint: false});

console.log("**** Cardápio da lanchonete ****");
console.log("-------------------------------");
console.log("COD - NOME PRODUTO    - PREÇO");
console.log("-------------------------------");
console.log("100 - Cachorro quente - R$ 1,20");
console.log("101 - Bauru simples   - R$ 1,30");
console.log("102 - Bauru com ovo   - R$ 1,50");
console.log("103 - Hamburguer      - R$ 1,20");
console.log("104 - Cheeseburguer   - RS 1,30");
console.log("105 - Refrigerante    - R$ 1,00");
console.log("-------------------------------");

var codigo = parseInt(prompt("Digite o código do pedido: "));
var quantidade = parseInt(prompt("Digite a quantidade que deseja: "));

var precoProduto = 0;

if(codigo == 100) {
  precoProduto = 1.2;
} else if(codigo == 101) {
  precoProduto = 1.3;
} else if(codigo == 102) {
  precoProduto = 1.5;
} else if(codigo == 103) {
  precoProduto = 1.2;
} else if(codigo == 104) {
  precoProduto = 1.3;
} else if(codigo == 105) {
  precoProduto = 1.0;
} else {
  console.log("Opção de produto inválida!")
}

var valorTotal = precoProduto * quantidade;

console.log(`Valor a ser pago = ${valorTotal}`)