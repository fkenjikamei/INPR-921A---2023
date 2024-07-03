const prompt = require("prompt-sync")({sigint:false});

var notas = [];
notas.push(10);
notas.push(3);
notas.push(5.5);
notas.push(7.5);

console.log(typeof(notas));
console.log(notas);

console.log("Nota do 1o bimestre: "+notas[0]);
console.log("Nota do 2o bimestre: "+notas[1]);
console.log("Nota do 3o bimestre: "+notas[2]);
console.log("Nota do 4o bimestre: "+notas[3]);

var isNotaErrada = prompt("Alguma nota foi digitada errada? S - Sim / N - Não");
if(isNotaErrada.toUpperCase() == "S") {
  let posicaoNotaErrada = prompt("Qual a nota está digitada errada? (de 1 a 4)");
  let novaNota = parseFloat(prompt("Digite a nova nota: "));

  notas.splice(posicaoNotaErrada-1,1,novaNota);

  console.log("Nota do 1o bimestre: "+notas[0]);
  console.log("Nota do 2o bimestre: "+notas[1]);
  console.log("Nota do 3o bimestre: "+notas[2]);
  console.log("Nota do 4o bimestre: "+notas[3]);
}

var mediaFinal = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log("Média final: "+mediaFinal);