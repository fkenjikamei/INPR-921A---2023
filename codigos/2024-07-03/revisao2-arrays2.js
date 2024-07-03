const prompt = require("prompt-sync")({sigint:false});

var notas = [[10, 4],[5,5],[9,5],[10,2]];
var medias = [];

console.log(notas[0][1]);
console.log(notas[3][1]);
console.log(notas[2][0]);

for(let i=0; i<notas.length; i++) {
  let somaMedias = 0;
  
  for(let j=0; j<notas[i].length; j++) {
    somaMedias = somaMedias + notas[i][j];
  }

  medias.push(somaMedias/2);
}

console.log(medias);