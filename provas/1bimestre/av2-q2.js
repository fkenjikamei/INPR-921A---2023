/**
 * Q2. (6.0 pontos) Sistema escolar
Uma escola deseja um programa para registrar as notas de 05 alunos. Conforme os critérios adotados pela escola, os alunos são avaliados e submetidos a avaliações em 04 bimestres. Elabore um programa que:

1) Recebe as médias de cada bimestre de cada aluno;

2) Calcule a média final conforme as médias obtidas em cada bimestre;

3) As notas de provas são representadas por números reais, pois podem receber números com ponto flutuante (vírgula).

4) Se a média geral do aluno for maior ou igual a 7, exibir a mensagem “O aluno foi aprovado por média = “, e apresentar a média geral.

5) Agora se o aluno obtiver a média geral maior ou igual a 4, e menor do que 7, exibir a mensagem “Está de recuperação. Sua média foi: “, e apresentar a média geral obtida.

Após, solicitar a nota da recuperação.
Caso a nota obtida na recuperação seja maior ou igual a 6, exibir a mensagem “O aluno foi aprovado na recuperação. Nota = ”, e apresentar a nota obtida na recuperação.
Caso contrário, exibir “O aluno foi reprovado na recuperação. Nota = ”, e a nota da recuperação.
6) Mas, se a média geral for menor que 4, exibir a mensagem “O aluno está reprovado, sem direito a recuperação. Média = ”, e apresentar a média geral obtida.
 */

const prompt = require("prompt-sync")();

// Entrada
var aluno1MediaBimestre1 = Number(prompt("Digite a média do 1º bimestre: "));
var aluno1MediaBimestre2 = Number(prompt("Digite a média do 2º bimestre: "));
var aluno1MediaBimestre3 = Number(prompt("Digite a média do 3º bimestre: "));
var aluno1MediaBimestre4 = Number(prompt("Digite a média do 4º bimestre: "));
var aluno1MediaGeral = (aluno1MediaBimestre1 + aluno1MediaBimestre2 + aluno1MediaBimestre3 + aluno1MediaBimestre4) / 4;

var aluno2MediaBimestre1 = Number(prompt("Digite a média do 1º bimestre: "));
var aluno2MediaBimestre2 = Number(prompt("Digite a média do 2º bimestre: "));
var aluno2MediaBimestre3 = Number(prompt("Digite a média do 3º bimestre: "));
var aluno2MediaBimestre4 = Number(prompt("Digite a média do 4º bimestre: "));
var aluno2MediaGeral = (aluno2MediaBimestre1 + aluno2MediaBimestre2 + aluno2MediaBimestre3 + aluno2MediaBimestre4) / 4;

var aluno3MediaBimestre1 = Number(prompt("Digite a média do 1º bimestre: "));
var aluno3MediaBimestre2 = Number(prompt("Digite a média do 2º bimestre: "));
var aluno3MediaBimestre3 = Number(prompt("Digite a média do 3º bimestre: "));
var aluno3MediaBimestre4 = Number(prompt("Digite a média do 4º bimestre: "));
var aluno3MediaGeral = (aluno3MediaBimestre1 + aluno3MediaBimestre2 + aluno3MediaBimestre3 + aluno3MediaBimestre4) / 4;

var aluno4MediaBimestre1 = Number(prompt("Digite a média do 1º bimestre: "));
var aluno4MediaBimestre2 = Number(prompt("Digite a média do 2º bimestre: "));
var aluno4MediaBimestre3 = Number(prompt("Digite a média do 3º bimestre: "));
var aluno4MediaBimestre4 = Number(prompt("Digite a média do 4º bimestre: "));
var aluno4MediaGeral = (aluno4MediaBimestre1 + aluno4MediaBimestre2 + aluno4MediaBimestre3 + aluno4MediaBimestre4) / 4;

var aluno5MediaBimestre1 = Number(prompt("Digite a média do 1º bimestre: "));
var aluno5MediaBimestre2 = Number(prompt("Digite a média do 2º bimestre: "));
var aluno5MediaBimestre3 = Number(prompt("Digite a média do 3º bimestre: "));
var aluno5MediaBimestre4 = Number(prompt("Digite a média do 4º bimestre: "));
var aluno5MediaGeral = (aluno5MediaBimestre1 + aluno5MediaBimestre2 + aluno5MediaBimestre3 + aluno5MediaBimestre4) / 4;


// Processamento
if (aluno1MediaGeral >= 7) {
  console.log("O aluno foi aprovado por média = " + aluno1MediaGeral.toFixed(2));
} else if(aluno1MediaGeral >= 4 && aluno1MediaGeral < 7) {
  var notaRecuperacao = Number(prompt("Digite a nota da recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("O aluno foi aprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  } else {
    console.log("O aluno foi reprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  }
} else {
  console.log("O aluno está reprovado, sem direito a recuperação. Média = " + aluno1MediaGeral.toFixed(2));
}

// Processamento
if (aluno2MediaGeral >= 7) {
  console.log("O aluno 1 foi aprovado por média = " + aluno2MediaGeral.toFixed(2));
} else if(aluno2MediaGeral >= 4 && aluno2MediaGeral < 7) {
  var notaRecuperacao = Number(prompt("Digite a nota da recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("O aluno foi aprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  } else {
    console.log("O aluno foi reprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  }
} else {
  console.log("O aluno está reprovado, sem direito a recuperação. Média = " + aluno2MediaGeral.toFixed(2));
}

// Processamento
if (aluno3MediaGeral >= 7) {
  console.log("O aluno foi aprovado por média = " + aluno3MediaGeral.toFixed(2));
} else if(aluno3MediaGeral >= 4 && aluno3MediaGeral < 7) {
  var notaRecuperacao = Number(prompt("Digite a nota da recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("O aluno foi aprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  } else {
    console.log("O aluno foi reprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  }
} else {
  console.log("O aluno está reprovado, sem direito a recuperação. Média = " + aluno3MediaGeral.toFixed(2));
}

// Processamento
if (aluno4MediaGeral >= 7) {
  console.log("O aluno foi aprovado por média = " + aluno4MediaGeral.toFixed(2));
} else if(aluno4MediaGeral >= 4 && aluno4MediaGeral < 7) {
  var notaRecuperacao = Number(prompt("Digite a nota da recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("O aluno foi aprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  } else {
    console.log("O aluno foi reprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  }
} else {
  console.log("O aluno está reprovado, sem direito a recuperação. Média = " + aluno4MediaGeral.toFixed(2));
}

// Processamento
if (aluno5MediaGeral >= 7) {
  console.log("O aluno foi aprovado por média = " + aluno5MediaGeral.toFixed(2));
} else if(aluno5MediaGeral >= 4 && aluno5MediaGeral < 7) {
  var notaRecuperacao = Number(prompt("Digite a nota da recuperação: "));
  if (notaRecuperacao >= 6) {
    console.log("O aluno foi aprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  } else {
    console.log("O aluno foi reprovado na recuperação. Nota = " + notaRecuperacao.toFixed(2));
  }
} else {
  console.log("O aluno está reprovado, sem direito a recuperação. Média = " + aluno5MediaGeral.toFixed(2));
}