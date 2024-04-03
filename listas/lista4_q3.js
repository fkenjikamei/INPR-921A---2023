

var nota1 = parseFloat(prompt("Digite a primeira nota: "))
var nota2 = parseFloat(prompt("Digite a segunda nota: "))
var nota3 = parseFloat(prompt("Digite a terceira nota: "))

var media = (nota1+nota2+nota3)/3;

if(media >= 7) {
  console.log("Aprovado");
} else if(media <= 5) {
  console.log("Reprovado")
} else {
  console.log("Em recuperação");
}