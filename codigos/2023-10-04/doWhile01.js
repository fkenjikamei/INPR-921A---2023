const prompt = require('prompt-sync')({sigint: false});


var qtdNotas = 0;

do {
    console.log(`Nota ${qtdNotas+1}`);
    qtdNotas++;
    let nota = parseFloat(prompt("Digite uma nota: "));

    if(nota < 0) {
        break;
    }

} while(qtdNotas < 3);