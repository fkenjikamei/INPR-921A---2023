const prompt = require('prompt-sync')({sigint: false});

var media = prompt("Digite a media do estudante: ")

if(media >= 6) {
    console.log("Aprovado")
} else {
    console.log("Recuperação")
}

console.log("Fim do programa")