const prompt = require('prompt-sync')({sigint: false});

var palavras = [];
var palavraSecreta, ganhou;
var letrasDigitadas = [];
var nomes_linguagens_programacao = ["javascript", "node", "java", "php", "python"];
var nomes_pessoas = ["Ana", "Mariana", "Petrúcio", "Raimundo", "Elizabete"];


function configurarInicioJogo() {
  ganhou = false;
  
  console.log("Jogo da Forca");
  console.log("");
  console.log("Categorias");
  console.log("1. Linguagens de programação");
  console.log("2. Nomes");
  let opcao = parseInt(prompt("Escolha a categoria da palavra: "));

  switch(opcao) {
    case 1: 
      posicaoArraySorteada = Math.floor(Math.random() * nomes_linguagens_programacao.length);
      palavraSecreta = palavras[posicaoArraySorteada];
      break;
  }
}

function inicioJogo() {
  console.log(`A palavra tem ${palavraSecreta.length} letras`);
  console.log(mascararPalavra(palavraSecreta, letrasDigitadas));
  console.log("");
}

function mascararPalavra(palavraSecreta, letrasDigitadas) {
  palavraMascarada = "";

  for (var i = 0; i < palavraSecreta.length; i++) {
    if (letrasDigitadas.indexOf(palavraSecreta[i]) > -1) {
      palavraMascarada += palavraSecreta[i];
    } else {
      palavraMascarada += "_";
    }
  }
  return palavraMascarada;
}

function jogar() {
  while (!ganhou) { // !ganhou é o mesmo que ganhou == false
    var chute = prompt("Digite uma letra: ");
  
    if(letrasDigitadas.indexOf(chute) > -1){
      console.log("Essa letra já foi digitada!");
    } 
    else {
      letrasDigitadas.push(chute);
  
      var palavraMascarada = mascararPalavra(palavraSecreta, letrasDigitadas);
       
      console.log("JOGO DA FORCA: ", palavraMascarada);

      if(palavraMascarada == palavraSecreta){
        console.log("Você ganhou!");
        quantidadeChutes = letrasDigitadas.length;
        console.log("Letras chutadas: " + letrasDigitadas);
        console.log("Quantidade de letras chutadas é: " + quantidadeChutes);
        ganhou = true;
      }
    }
  }
}

configurarInicioJogo();
inicioJogo();
jogar();