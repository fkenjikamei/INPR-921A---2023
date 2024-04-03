const prompt = require('prompt-sync')({sigint: false});

var ladoX = parseFloat(prompt("Digite o tamanho do lado X: "))
var ladoY = parseFloat(prompt("Digite o tamanho do lado Y: "))
var ladoZ = parseFloat(prompt("Digite o tamanho do lado Z: "))

if(ladoX + ladoY < ladoZ || ladoX + ladoZ < ladoY || ladoY + ladoZ < ladoX) {
  console.log("Esses lados não formam um triângulo");
} else if(ladoX == ladoY == ladoZ) {
  console.log("Equilátero");
} else if(ladoX == ladoY || ladoX == ladoZ || ladoY == ladoZ) {
  console.log("Isósceles");
} else if(ladoX != ladoY && ladoX != ladoZ && ladoY != ladoZ) {
  console.log("Escaleno");
}