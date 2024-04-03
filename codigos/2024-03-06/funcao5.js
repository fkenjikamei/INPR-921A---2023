const prompt = require('prompt-sync')({sigint: false});


function telaInicial() {
    console.log("Bem-vindo ao programa de Operações Básicas Matemáticas");
    console.log("1. Somar");
    console.log("2. Subtrair");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Sair");
}

function somar(numero1, numero2) {
    console.log("* Somar *");
    console.log(`Resultado de ${numero1} + ${numero2} = ${numero1 + numero2}`)
}

function escolherOpcao() {
    var opcao = 0;
    var numero1, numero2;
    
    while(opcao != 5) {
        console.log("Escolha uma operação:");
        opcao = parseInt(prompt());
    
        if(opcao != 5) {
            console.log("Digite os dois números para realizar a operação escolhida...");
            numero1 = parseFloat(prompt("Digite o 1o número: "));
            numero2 = parseFloat(prompt("Digite o 2o número: "));
        }
        
        switch (opcao) {
            case 1:
                somar(numero1, numero2);
                break;
            case 2:
                console.log("* Subtrair *");
                console.log(`Resultado de ${numero1} - ${numero2} = ${numero1-numero2}`)
                break;
            case 3:
                console.log("* Multiplicar *");
                console.log(`Resultado de ${numero1} * ${numero2} = ${numero1*numero2}`)
                break;
            case 4:
                console.log("* Dividir *");
                console.log(`Resultado de ${numero1} / ${numero2} = ${numero1/numero2}`)
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }
}

telaInicial();
escolherOpcao();