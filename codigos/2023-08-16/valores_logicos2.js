/**
 * Uma casa de show vai realizar um evento, e só pode permitir a entrada de maiores de idade ou se o menor estiver acompanhado de um responsável.
 */
const prompt = require('prompt-sync')({sigint: false});

var maior_idade = prompt("É maior de idade? 1 - Sim / 2 - Não ");
var acompanhado_responsavel;

if(maior_idade == "2") {
    acompanhado_responsavel = prompt("Está acompanhado do responsável? 1 - Sim / 2 - Não ");
}

if(maior_idade == "1" || acompanhado_responsavel == "1") {
    console.log("Pode entrar")
} else {
    console.log("Não pode entrar")
}