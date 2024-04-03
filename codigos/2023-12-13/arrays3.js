var nomeAluno1 = "Fulano";
var idadeAluno1 = 20;
var nomeAluno2 = "Ciclana";
var idadeAluno2 = 30;

var aluno1 = [nomeAluno1, idadeAluno1];
var aluno2 = [nomeAluno2, idadeAluno2];

var alunos = [];
var somaIdades = 0;

alunos.push(aluno1);
alunos.push(aluno2);

console.log(alunos);

for(let i=0; i<alunos.length; i++) {
    console.log(alunos[i][0]);
    somaIdades += alunos[i][1];
}

console.log("Média das idades: ",(somaIdades / alunos.length));