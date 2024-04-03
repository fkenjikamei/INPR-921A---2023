//Rayne Gabriely Alves da Silva

const prompt = require('prompt-sync')()

let apostas = [];
function fazerAposta() {
  let numerosEscolhidos = [];
  while (numerosEscolhidos.length < 6) {
    let numero = parseInt(prompt("Escolha um número de 1 a 60:"));
    if (numero >= 1 && numero <= 60 && !numerosEscolhidos.includes(numero)) {
      numerosEscolhidos.push(numero);
    } else {
      console.log("Número inválido ou repetido. Escolha outro número.");

    }
  }
  apostas.push(numerosEscolhidos);
}

function sortearNumeros() {
  if (apostas.length === 0) {
    console.log("Nenhuma aposta realizada. Não é possível sortear os números.");
    return;
  }

  let numerosSorteados = [];
  while (numerosSorteados.length < 6) {
    let numeroSorteado = Math.floor(Math.random() * 6) + 1;
    if (!numerosSorteados.includes(numeroSorteado)) {
      numerosSorteados.push(numeroSorteado);
    }
  }

  console.log("Números sorteados: " + numerosSorteados.join(", "));

  let ganhadores = 0;
  for (let aposta of apostas) {
    let acertos = aposta.filter(numero => numerosSorteados.includes(numero)).length;
    if (acertos === 6) {
      ganhadores++;
    }
  }

  if (ganhadores > 0) {
    console.log(`Tivemos ${ganhadores} ganhador(es)! Parabéns!`);
  } else {
    console.log("Não houve ganhadores. Tente novamente na próxima rodada.");
  }
}

let escolha;
do {
  escolha = parseInt(prompt("Menu\n1 - Fazer aposta\n2 - Sortear números\n3 - Sair\nDigite a opção: "));

  switch (escolha) {
    case 1:
      fazerAposta();
      break;
    case 2:
      sortearNumeros();
      break;
    case 3:
      console.log("Saindo do programa.");
      break;
    default:
      console.log("Opção inválida. Escolha novamente.");
      break;
  }
} while (escolha !== 3);