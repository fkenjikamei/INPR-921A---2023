/*
Faça um programa que solicite notas de 0 a 10. 
Se forem digitado os números 100 ou -100, o programa deve parar a execução.
O programa só deve parar de solicitar novas notas, se forem digitadas 6 notas acima de 6.
Ao final, informe:
- a quantidade de notas digitadas.
- a média das notas
*/
const prompt = require('prompt-sync')({sigint: false});

var qtdNotasAcima6 = 1;
var nota, somaNotas = 0, qtdNotasDigitadas = 0;

do {
    nota = parseFloat(prompt("Digite uma nota de 0 a 10: "))
    
    if(nota == -100 || nota == 100) {
        console.log("Fim da execução");
        break;
    }

    if(nota < 0 || nota > 10) {
        console.log("Por favor, digite uma nota válida (de 0 a 10)");
        continue;
    }

    qtdNotasDigitadas++;
    somaNotas += nota;
    
    if(nota > 6) {
        qtdNotasAcima6++;
    }

} while(qtdNotasAcima6 <= 6);

if(qtdNotasDigitadas > 0) {
    console.log("Quantidade de notas digitas: ",qtdNotasDigitadas);
    console.log("Média das notas digitadas: ",(somaNotas/qtdNotasDigitadas).toFixed(2));
}
