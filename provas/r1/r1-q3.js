const prompt = require('prompt-sync')({sigint: false});

var numerosSorteados = [];
var numeroJaSorteado = false;
var numeroAleatorio;
var nivelValido = false;
var qtdChances = 0;

while(numerosSorteados.length < 6) {    
     numeroAleatorio = parseInt(Math.random() * 60);
    
    for(let i = 0; i <= 5; i++) {
        if(numeroAleatorio == numerosSorteados[i]) {
            numeroJaSorteado = true;
        }
    }

    if(numeroJaSorteado == false) {
        numerosSorteados.push(numeroAleatorio);

    }
}

console.log(numerosSorteados);

while(nivelValido == false) {
    console.log("Escolha um nível para definir a quantidade de chutes que poderá dar: ");
    console.log("Nível 1: 8 chances");
    console.log("Nível 2: 7 chances");
    console.log("Nível 3: 6 chances");
    
    var nivel = parseInt(prompt("Escolha um nível: "));

    if(nivel == 1 || nivel == 2 || nivel == 3) {
        nivelValido = true;

        if(nivel == 1) {
            qtdChances = 8;
        } else if(nivel == 2) {
            qtdChances = 7;
        } else {
            qtdChances = 6;
        }
    }
}

for(let i = 0; i < qtdChances; i++) {

    let chute = parseInt(prompt("Qual o seu chute (1 a 60)?"));

    if(chute >= 1 && chute <= 60) {
        for(let j = 0; j < numerosSorteados.length; j++) {
            if(chute == numerosSorteados[j]) {
                
            }
        }
    } else {
        console.log("Chute inválido!")
    }
}
