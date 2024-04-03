/**
 * Q6. Faça um algoritmo que irá fazer o cadastro de usuário. Para isso, solicita o nome do usuário, e a senha. Depois, pede que o usuário confirme novamente a senha. O sistema deverá verificar se as senhas digitadas são iguais. Se forem iguais, informar que o cadastro está correto. Se não forem iguais, informar que o cadastro não foi realizado porque as senhas não conferem.
 */

const prompt = require('prompt-sync')({sigint: false});

var nome_usuario = prompt("Digite o nome: ")
var senha = prompt("Digite a senha: ")
var confirma_senha = prompt("Digite a confirmação da senha: ")

if(senha == confirma_senha) {
    console.log("Verificando as senhas digitadas...")
    console.log(">> Cadastro realizado!")
} else {
    console.log(">> Cadastro não foi realizado porque as senhas não conferem")
}