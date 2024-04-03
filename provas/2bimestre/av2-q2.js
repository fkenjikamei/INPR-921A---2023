const prompt = require('prompt-sync')({ sigint: false });

var numeroSorteado1 = 0;
var numeroSorteado2 = 0;
var numeroSorteado3 = 0;
var numeroSorteado4 = 0;
var numeroSorteado5 = 0;
var qtdNumerosSorteados = 1;

while (qtdNumerosSorteados <= 5) {
    var sorteio = parseInt(Math.random() * 99);

    if (sorteio > 0) {
        if (sorteio == numeroSorteado1 || sorteio == numeroSorteado2 || sorteio == numeroSorteado3 || sorteio === numeroSorteado4 || sorteio == numeroSorteado5) {
            console.log("Número já foi sorteado");
        }
        else {
            if (qtdNumerosSorteados == 1) {
                numeroSorteado1 = sorteio;
            }
            if (qtdNumerosSorteados == 2) {
                numeroSorteado2 = sorteio;
            }
            if (qtdNumerosSorteados == 3) {
                numeroSorteado3 = sorteio;
            }
            if (qtdNumerosSorteados == 4) {
                numeroSorteado4 = sorteio;
            }
            if (qtdNumerosSorteados == 5) {
                numeroSorteado5 = sorteio;
            }

            qtdNumerosSorteados++;
        }
    }
}

console.log(`Número sorteado 1: ${numeroSorteado1}`);
console.log(`Número sorteado 2: ${numeroSorteado2}`);
console.log(`Número sorteado 3: ${numeroSorteado2}`);
console.log(`Número sorteado 4: ${numeroSorteado3}`);
console.log(`Número sorteado 5: ${numeroSorteado4}`);