const prompt = require('prompt-sync')({sigint: false});

var qtdNotasAcima8 = 0;
var qtdNotasDigitadas = 0;
var somaNotas = 0;
var menorNota = 10;
var notaValida;
var nota;

while(qtdNotasAcima8 < 10) {
    notaValida = false;
    
    while(notaValida == false) {
        nota = parseFloat(prompt("Digite uma nota de 1 a 10: "));
        
        if(nota >= 0 && nota <= 10) {
            notaValida = true;
        } else {
            console.log(">> Nota inválida.");
        }
    }

    qtdNotasDigitadas++;
    somaNotas += nota;

    if(nota > 8) {
        qtdNotasAcima8++;
    }

    if(nota < menorNota) {
        menorNota = nota;
    }
}

console.log();
console.log(`>> Quantidade de notas digitadas: ${qtdNotasDigitadas}`)
console.log(`>> Média das notas: ${(somaNotas/qtdNotasDigitadas).toFixed(2)}`);
console.log(`>> Menor nota: ${menorNota}`);