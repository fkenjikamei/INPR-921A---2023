const prompt = require("prompt-sync")({sigint:false});

var notas = [];
notas.push(10);
notas.push(3);
notas.push(5.5);
notas.push(7.5);

console.log(typeof(notas));
console.log(notas);

for(let i=0; i<notas.length; i++) {
  console.log(`Nota do ${i+1}o bimestre: `+notas[i]);
}

var isNotaErrada = prompt("Alguma nota foi digitada errada? S - Sim / N - Não ");
if(isNotaErrada.toUpperCase() == "S") {
  let posicaoNotaErrada = prompt("Qual a nota está digitada errada? (de 1 a 4)");
  let novaNota = parseFloat(prompt("Digite a nova nota: "));

  notas.splice(posicaoNotaErrada-1,1,novaNota);

  for(let i=0; i<notas.length; i++) {
    console.log(`Nota do ${i+1}o bimestre: `+notas[i]);
  }
}

var mediaFinal = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log("Média final: "+mediaFinal);