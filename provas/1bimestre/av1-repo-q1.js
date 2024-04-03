const prompt = require('prompt-sync')({sigint: false});

let inteiro = Number(prompt("Digite um numero inteiro: "))
console.log("Antecessor: ",(inteiro-1))
console.log("Sucessor: ",(inteiro+1))
