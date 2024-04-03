const prompt = require('prompt-sync')({sigint: false});

var idade = parseInt(prompt("Digite a idade do nadador: "));

if(idade >= 5 && idade <= 7) {
    console.log("Infantil A");
} else if(idade >= 8 && idade <= 10) {
    console.log("Infantil B");
} else if(idade >= 11 && idade <= 13) {
    console.log("Juvenil A");
} else if(idade >= 14 && idade <= 17) {
    console.log("Juvenil B");
} else if(idade >= 18) {
    console.log("Adulto")
} else {
    console.log("Não tem idade para competir.")
}