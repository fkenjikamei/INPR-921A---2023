/* Criar um programa que recebe os nomes dos alunos, depois pede duas notas para cada aluno. Ao final, apresenta a média.
*/
const prompt = require('prompt-sync')({sigint: false});

var adicionarNovosAlunos = true;
var alunos = [];
var notas = [];
var medias = [];

do {
    console.log("Adicionar alunos");
    let nomeAluno = prompt("Digite o nome do aluno: ");

    if(nomeAluno == "") {
        console.log("Por favor, digite um nome válido. ");
    } else {
        alunos.push(nomeAluno);

        let continuar = prompt("Deseja adicionar um novo aluno? (S ou N) ");

        if(continuar.toUpperCase() == "N") {
            adicionarNovosAlunos = false;
        }
    }
} while(adicionarNovosAlunos == true);

for(let i = 0; i < alunos.length; i++) {
    console.log(`Digite as notas para o aluno ${alunos[i]}`);

    let somaNotas = 0;

    for(let j = 1; j <= 2; j++) {
        let nota = parseFloat(prompt(`Digite a ${j}a nota: `));
        notas.push(nota);
        somaNotas += nota;
    }

    medias.push(somaNotas/2);
}

for(let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i]}`);
    console.log(`Média: ${medias[i]}`);
}