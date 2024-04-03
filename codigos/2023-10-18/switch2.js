const prompt = require('prompt-sync')({sigint: false});

var numeroAleatorio = Math.floor(Math.random()*100);
var numeroChances = 1;


console.log("Jogo de Adivinhação");
console.log("1. Fácil (10 chances)");
console.log("2. Médio (5 chances)");
console.log("3. Difícil (3 chances)");

opcao = Number(prompt("Escolha uma opção: "));

switch(opcao) {
    case 1: numeroChances = 10; break;
    case 2: numeroChances = 5; break;
    case 3: numeroChances = 3; break;
    default:
        console.log("Opção inválida. Terá apenas uma chance!");
        break;
}

for(let i = 1; i <= numeroChances; i++) {
    console.log(numeroAleatorio);
    console.log(`Chute ${i}/${numeroChances}`);
    chute = Number(prompt("Qual o seu chute? "));

    if(chute == numeroAleatorio) {
        console.log("Você acertou!");
        break;
    } else if(chute > numeroAleatorio) {
        console.log("Seu chute foi maior que o número aleatório");
    } else {
        console.log("Seu chute foi menor que o número aleatório");
    }
}