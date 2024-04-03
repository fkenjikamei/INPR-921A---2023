/*
Faça um programa que solicite 5 notas de 0 a 10. 
Se forem digitado os números 100 ou -100, o programa deve parar a execução.
O programa só deve parar de solicitar novas notas, se forem digitadas 3 notas acima de 6.
Ao final, informe:
- a quantidade de notas digitadas.
- a média das notas
*/
const prompt = require('prompt-sync')({sigint: false});

var nota;

for(let i = 1; i <= 5; i++) {
    nota = Number(prompt("Digite uma nota de 1 a 10: "));

    if(nota == 100 || nota == -100) {
        console.log("Fim do programa");
        break;
    }

    if(nota < 0 || nota > 10) {
        console.log("Por favor, digite uma nota válida (de 0 a 10)");
        i--;
        continue;
    }

    console.log("Cheguei no final do loop")
}