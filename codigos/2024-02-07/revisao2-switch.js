const prompt = require('prompt-sync')({sigint: false});

console.log("** Conversao de Tempo **");
console.log("1 - Segundos para Horas");
console.log("2 - Minutos para Segundos");
console.log("3 - Horas para Segundos");
console.log("Escolha uma opção: ");

var opcao = parseInt(prompt());

switch(opcao) {
    case 1:
        console.log("1 - Segundos para Horas");
        let segundos = parseInt(prompt("Digite o valor em segundos: "));
        console.log("Resultado: "+(segundos/3600));
        break;
    case 2:
        console.log("2 - Minutos para Segundos");
        let minutos = parseInt(prompt("Digite o valor em minutos: "));
        console.log("Resultado: "+(minutos*60));
        break;
    case 3:
        console.log("3 - Horas para Segundos");
        let horas = parseInt(prompt("Digite o valor em horas: "));
        console.log("Resultado: "+(horas*3600));
        break;
    default:
        console.log("Opção inválida");
        break;
}