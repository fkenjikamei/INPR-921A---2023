// Pedro Mouhamed e Kamilly Vitória

const prompt = require('prompt-sync')({sigint: false});

const nomesAltura =[];

let i = 0;
while (i < 5) {
    const nome = prompt("Digite o nome da pessoa:");
    const altura =parseFloat(prompt("Digite a altura da pessoa em metros:"));
    nomesAltura.push([nome, altura]);
    i++;
}

for (let i = 0; i< nomesAltura.length; i++){
    console.log('pessoa ${i + 1}:  ${nomesAltura[i][0]} possui ${nomesAltura[i][1]}m de altura.');
}