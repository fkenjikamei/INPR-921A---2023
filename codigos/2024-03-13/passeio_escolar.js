const prompt = require('prompt-sync')({sigint: false});

var listaAutorizadosPasseio = [];
var listaNaoAutorizadosPasseio = [];

function menu() {
    let opcao = '0';

    while(opcao != 'd') {
        console.log("a. Controle de ida ao passeio");
        console.log("b. Lista de quem poderá ir ao passeio");
        console.log("c. Lista de quem não poderá ir ao passeio");
        console.log("d. Sair");
        opcao = prompt("Escolha uma opção: ");
    
        switch(opcao) {
            case 'a':
                let nome = prompt("Qual o nome do estudante? ");
                let idade = parseInt(prompt("Qual a idade? "));
                
                //if ternario
                if(validarIdaAoPasseio(idade) ? listaAutorizadosPasseio.push(nome) : listaNaoAutorizadosPasseio.push(nome));
                prompt();
                break;
            case 'b':
                imprimirLista("autorizados");
                prompt();
                break;
            case 'c':
                imprimirLista("não autorizados");
                prompt();
                break;
            case 'd':
                console.log("Até logo...");
                break;
            default:
                console.log("Opção inválida");
                prompt();
                break;
        }
    }
}

function validarIdaAoPasseio(idade) {
    if(idade >= 18) {
        return true;
    }
    else {
        let acompanhadaMaior = parseInt(prompt("Está acompanhado de uma pessoa maior de idade? (1 - Sim, 2 - Não) "));

        if(acompanhadaMaior == 1) {
            return true;
        }
        else {
            let autorizacaoResponsavel = parseInt(prompt("Possui autorização do responsável? (1 - Sim, 2 - Não) "));

            if(autorizacaoResponsavel == 1) {
                return true;
            }
        }
        return false;
    }
}

function imprimirLista(tipoLista) {
    if(tipoLista == "autorizados") {
        if(listaAutorizadosPasseio.length == 0) {
            console.log("Nenhum estudante autorizado até o momento");
        }
        else {
            console.log(`Quantidade de estudantes autorizados: ${listaAutorizadosPasseio.length}`);
    
            for(let i=0; i<listaAutorizadosPasseio.length; i++) {
                console.log(listaAutorizadosPasseio[i]);
            }
        }
    }

    if(tipoLista == "não autorizados") {
        if(listaNaoAutorizadosPasseio.length == 0) {
            console.log("Nenhum estudante não autorizado até o momento");
        }
        else {
            console.log(`Quantidade de estudantes não autorizados: ${listaNaoAutorizadosPasseio.length}`);
    
            for(let i=0; i<listaNaoAutorizadosPasseio.length; i++) {
                console.log(listaNaoAutorizadosPasseio[i]);
            }
        }
    }
}

menu();