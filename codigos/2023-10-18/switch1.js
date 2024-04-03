const prompt = require('prompt-sync')({sigint: false});

var numeroMes = Number(prompt("Escolha um mês de 1 a 12: "));

/*
if(numeroMes == 1) {
    console.log("Janeiro");
} else if(numeroMes == 2) {
    console.log("Fevereiro");
} else if(numeroMes == 3) {
    console.log("Março");
} else if(numeroMes == 4) {
    console.log("Abril");
} else if(numeroMes == 5) {
    console.log("Maio");
} else if(numeroMes == 6) {
    console.log("Junho");
} else if(numeroMes == 7) {
    console.log("Julho");
} else if(numeroMes == 8) {
    console.log("Agosto");
} else if(numeroMes == 9) {
    console.log("Setembro");
} else if(numeroMes == 10) {
    console.log("Outubro");
} else if(numeroMes == 11) {
    console.log("Novembro");
} else if(numeroMes == 12) {
    console.log("Dezembro");
} else {
    console.log("Opção de mês inválida");
}
*/

switch(numeroMes) {
    case 1: console.log("Janeiro"); break;
    case 2: console.log("Fevereiro"); break;
    case 3: console.log("Março"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maio"); break;
    case 6: console.log("Junho"); break;
    case 7: console.log("Julho"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Setembro"); break;
    case 10: console.log("Outubro"); break;
    case 11: console.log("Novembro"); break;
    case 12: console.log("Dezembro"); break;
    default: console.log("Opção de mês inválida"); break;
}