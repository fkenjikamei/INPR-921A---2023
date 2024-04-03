/**
 * Fazer um programa que vai sortear 6 numeros inteiros, de 1 a 60. Este número não pode se repetir.
 */
var contNumerosValidosSorteados = 0;
var numeroSorteado1 = 0;
var numeroSorteado2 = 0;
var numeroSorteado3 = 0;
var numeroSorteado4 = 0;
var numeroSorteado5 = 0;
var numeroSorteado6 = 0;

const prompt = require('prompt-sync')({sigint: false});

while(contNumerosValidosSorteados < 6) {
    contNumerosValidosSorteados++;
    let sorteio = Number.parseInt(Math.random()*61);

    if(sorteio <= 0) {
        contNumerosValidosSorteados--;
    } 
    else {
        if(sorteio == numeroSorteado1 || sorteio == numeroSorteado2 || sorteio == numeroSorteado3 || sorteio == numeroSorteado4 || sorteio == numeroSorteado5 || sorteio == numeroSorteado6) {
            contNumerosValidosSorteados--;
            continue;
        } 
        else {
            if(contNumerosValidosSorteados == 1) {
                numeroSorteado1 = sorteio;
            } else if(contNumerosValidosSorteados == 2) {
                numeroSorteado2 == sorteio;
            } else if(contNumerosValidosSorteados == 3) {
                numeroSorteado3 = sorteio;
            } else if(contNumerosValidosSorteados == 4) {
                numeroSorteado4 = sorteio;
            } else if(contNumerosValidosSorteados == 5) {
                numeroSorteado5 = sorteio;
            } else if(contNumerosValidosSorteados == 6) {
                numeroSorteado6 = sorteio;
            }
        }
    }
}

console.log(`Numero sorteado 1: ${numeroSorteado1}`);
console.log(`Numero sorteado 2: ${numeroSorteado2}`);
console.log(`Numero sorteado 3: ${numeroSorteado3}`);
console.log(`Numero sorteado 4: ${numeroSorteado4}`);
console.log(`Numero sorteado 5: ${numeroSorteado5}`);
console.log(`Numero sorteado 6: ${numeroSorteado6}`);