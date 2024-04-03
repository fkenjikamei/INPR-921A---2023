const prompt = require('prompt-sync')({sigint: false});

var qtdAlunos = Number(prompt("Quantos alunos a turma possui? "));

var nomes = [];

for(let i = 0; i < qtdAlunos; i++) {
    let nome = prompt("Qual o nome do aluno? ");
    nomes.push(nome);
}

for(let i = 0; i< qtdAlunos; i++) {
    console.log("Nome do aluno: ",nomes[i]);
}