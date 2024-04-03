/* Q1. Elabore um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500. No final, exiba a quantidade de números ímpares múltiplos de 3, e o resultado da soma. 
 */

var numero = 1;
var somaImparesMultiplos3 = 0;
var qtdImparesMultiplos3 = 0;

while(numero <= 500) {
  if(numero%2 != 0 && numero%3 == 0) {
    somaImparesMultiplos3 += numero;
    qtdImparesMultiplos3++;
  }

  numero += 1;
}

console.log(`Quantidade de números ímpares múltiplos de 3: ${qtdImparesMultiplos3}`);
console.log(`Soma dos números ímpares múltiplos de 3: ${somaImparesMultiplos3}`);