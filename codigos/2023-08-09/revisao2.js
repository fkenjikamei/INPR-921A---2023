const prompt = require('prompt-sync')({sigint: false});

console.log("Opções: ")
console.log("L - Leve \nM - Moderada \nG - Grave")

var situacao_paciente = prompt("Escolha uma opção: ")

if(situacao_paciente == "L" || situacao_paciente == "l") {
    console.log("Atendimento não prioritário")
} else if(situacao_paciente == "M" || situacao_paciente == "m") {
    console.log("Atendimento prioritário")
} else if(situacao_paciente == "G" || situacao_paciente == "g") {
    console.log("Atendimento com urgência")
} else {
    console.log("Opção inválida!")
}