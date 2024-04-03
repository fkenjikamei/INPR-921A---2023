const prompt = require('prompt-sync')({ sigint: false });


var qtdMaximaPassageiros = 0;
var qtdPassageiros = 0;
var qtdPassageirosEspeciais = 0;

console.log("Sistema de Transporte")
qtdMaximaPassageiros = parseInt(prompt("Qual a quantidade máxima de passageiros? "));


while (qtdPassageiros < qtdMaximaPassageiros) {
    let qtdAcomodacaoEspecial = (qtdPassageiros * 10) / 100;

    console.log("Olá... seja bem-vindo");

    let passagemValida = parseInt(prompt("A pessoa está com uma passagem válida? (1 - Sim, 2 - Não) "));

    let menorTermoAutorizacao = 0, menorAcompanhado = 0, acessoMenorAutorizado = false;

    if (passagemValida == 1) {
        let idade = parseInt(prompt("Qual a idade? "));
        let tipoAcomodacao = parseInt(prompt("Passageiro necessita de acomodação especial? (1 - Sim, 2 - Não) "));

        if (idade < 18) {
            console.log("* Passageiro menor de idade *");
            menorAcompanhado = parseInt(prompt("Passageiro menor de idade está acompanhado? (1 - Sim, 2 - Não) "));

            if (menorAcompanhado == 2) {
                menorTermoAutorizacao = parseInt(prompt("Possui termo de autorização? (1 - Sim, 2 - Não) "));
            }

            if (menorAcompanhado == 1 || menorTermoAutorizacao == 1) {
                console.log(">> Menor de idade, com acesso autorizado.");
                acessoMenorAutorizado = true;
            }
            else {
                console.log(">> Menor de idade, sem acesso autorizado.");
            }
        }

        if (idade >= 18 || acessoMenorAutorizado == true) {
            let aceitaViajarAssentoComum;

            if (tipoAcomodacao == 1) {
                if (qtdPassageirosEspeciais < qtdPassageirosEspeciais) {
                    console.log("Acomodação especial disponível");
                    qtdPassageirosEspeciais++;
                    qtdPassageiros++;
                }
                else {
                    console.log(">> Infelizmente não temos mais assentos especiais disponíveis.");
                    aceitaViajarAssentoComum = parseInt(prompt("Deseja viajar em assento comum ou esperar o próximo ônibus? (1- Assento comum, 2- Esperar próximo) "));

                    if (aceitaViajarAssentoComum == 2) {
                        console.log(">> Espere o próximo ônibus! ");
                    }
                }
            }

            if (tipoAcomodacao == 2 || aceitaViajarAssentoComum == 1) {
                console.log("Boa viagem!");
                qtdPassageiros++;
            }
        }
    }
    else {
        console.log(">> Passagem inválida. Acesso não permitido!");
    }
}

console.log("Ônibus lotado!");
console.log("Preparando para partir...");