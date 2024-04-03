const prompt = require('prompt-sync')({sigint: false});

var qtdEmpate = 0;
var vitoriasJogador1 = 0;
var vitoriasJogador2 = 0;

console.log("Jokenpo");

for(let i=0; i<3; i++) {
    console.log(`>> Partida ${(i+1)} <<`)
    console.log();
    console.log("* Jogador 1 *");
    console.log("1 - Pedra\n2 - Papel\n3 - Tesoura");
    let jogador1 = parseInt(prompt("Escolha sua jogada: "));

    console.log();
    console.log("* Jogador 2 *");
    console.log("1 - Pedra\n2 - Papel\n3 - Tesoura");
    let jogador2 = parseInt(prompt("Escolha sua jogada: "));

    if((jogador1 == 1 && jogador2 == 1) || (jogador1 == 2 && jogador2 == 2) || (jogador1 == 3 && jogador2 == 3)) {
        console.log(`Jogadores empataram na Partida ${(i+1)}`);
        qtdEmpate++;
    } else if((jogador1 == 1 && jogador2 == 3) || (jogador1 == 2 && jogador2 == 1)|| (jogador1 == 3 && jogador2 == 2)) {
        console.log(`Jogador 1 ganhou a Partida ${(i+1)}`);
        vitoriasJogador1++;
    } else {
        console.log(`Jogador 2 ganhou a Partida ${(i+1)}`);
        vitoriasJogador2++;
    }

    prompt();
}

if(vitoriasJogador1 > vitoriasJogador2) {
    console.log(">> Resultado final: Jogador 1 ganhou");
} else if(vitoriasJogador2 > vitoriasJogador1) {
    console.log(">> Resultado final: Jogador 2 ganhou");
} else {
    console.log(">> Resultado final: O jogo empatou!");
}
console.log("Vitórias para o Jogador 1:", vitoriasJogador1);
console.log("Vitórias para o Jogador 2:", vitoriasJogador2);