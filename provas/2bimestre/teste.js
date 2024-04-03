/**Alunos : Virginia Gabrielly ; Yarllei Humberto 
 * Reposição da prova AV2 
*/


const prompt = require('prompt-sync')({sigint: false});


let quantidadeMaximaPassageiros = 0;
let quantidadePassageiros = 0;
let quantidadePassageirosEspeciais = 0;
let quantidadeAcomodacaoEspecial = 0;

console.log("Sistema de Transporte")
quantidadeMaximaPassageiros = parseInt(prompt("Qual é a quantidade máxima de passageiros?"));

while(quantidadePassageiros < quantidadeMaximaPassageiros) {
    let quantidadeAcomodacaoEspecial = (quantidadePassageiros * 10)/100;

    console.log("seja bem-vindo!");  

let passagemValida = parseInt(prompt("A pessoa está com sua passagem válida? ( Sim ou  Não?) "));
let menorTermoAutorizacao = 0, menorAcompanhado = 0, acessoMenorAutorizado = false;

if(passagemValida == 1) {
    let idade = parseInt(prompt("Qual a idade? "));
    let tipodeAcomodacao = parseInt(prompt(" O Passageiro precisa de acomodação especial? ( Sim ou Não?) "));

 if(idade < 18) {
   console.log("O Passageiro é menor de idade!");
    menorAcompanhado = parseInt(prompt(" O Passageiro que é  menor de idade está acompanhado? ( Sim ou Não?) "));

    if(menorAcompanhado == 2) {
        menorTermoAutorizacao = parseInt(prompt(" O passageiro possui termo de autorização? ( Sim ou  Não?) "));
    }  
    if(menorAcompanhado == 1 || menorTermoAutorizacao == 1) {
        console.log(" Menor de idade, autorizado.");
        acessoMenorAutorizado = true
    }
    else {
        console.log("Menor de idade, não autorizado.");
    }
}
if(idade >= 18 || acessoMenorAutorizado == true) {
    let aceitaViajarAssentoComum;


 if(tipodeAcomodacao == 1) {
  if(quantidadePassageirosEspeciais < quantidadePassageirosEspeciais) {
    console.log("Acomodação especial esta disponível");
  quantidadePassageirosEspeciais++;
 quantidadePassageiros++;
 }

 else {
    console.log("não temos mais assentos especiais disponíveis no momento.");
    aceitaViajarAssentoComum = parseInt(prompt("Deseja viajar em assento comum ou esperar o próximo ônibus? (Assento comum ou Esperar próximo?) "));
    
if(aceitaViajarAssentoComum == 2) {
        console.log("  Eu aguardo o próximo ônibus! ");   
    }
}
}   

if(tipodeAcomodacao == 2 || aceitaViajarAssentoComum == 1) {
    console.log("tenha uma Boa viagem!");
    quantidadePassageiros++;
    }
  }
}
else {
console.log(" Passagem inválida. Acesso não autorizado!");
 }
}

console.log(" O ônibus está cheio !");
console.log("O ônibus está se Preparando para sair.");