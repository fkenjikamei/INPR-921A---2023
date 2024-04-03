const prompt = require('prompt-sync')({ sigint: false });

while (true) {
    console.log("Questão 1");
    console.log("\n** Transformação de tempo **");
    console.log("1 - Horas para Minutos");
    console.log("2 - Minutos para Horas");
    console.log("3 - Minutos para Segundos");
    console.log("4 - Segundos para Minutos");
    console.log("5 - Horas para Segundos");
    console.log("6 - Segundos para Horas");
    console.log("7 - Sair\n");

    var opcao = parseInt(prompt("Escolha uma opção: "));

    if (opcao == 1) {
        console.log("Transformação de Horas para Minutos")
        var horas = parseInt(prompt("Qual a quantidade de horas: "));
        minutos = horas * 60;
        console.log(`${horas} hora(s) equivale(m) a ${minutos} minutos`);
        prompt();
    }
    else if (opcao == 2) {
        console.log("Transformação de Minutos para Horas")
        var minutos = parseInt(prompt("Qual a quantidade de minutos: "));
        horas = minutos / 60;
        console.log(`${minutos} minutos(s) equivale(m) a ${horas} horas`);
        prompt();
    }
    else if (opcao == 3) {
        console.log("Transformação de Minutos para Segundos")
        var minutos = parseInt(prompt("Qual a quantidade de minutos: "));
        segundos = minutos * 60;
        console.log(`${minutos} minutos(s) equivale(m) a ${segundos} segundo(s)`);
        prompt();
    }
    else if (opcao == 4) {
        console.log("Transformação de Segundos para Minutos")
        var segundos = parseInt(prompt("Qual a quantidade de segundos: "));
        minutos = segundos / 60;
        console.log(`${segundos} segundo(s) equivale(m) a ${minutos} minuto(s)`);
        prompt();
    }
    else if (opcao == 5) {
        console.log("Transformação de Horas para Segundos")
        var horas = parseInt(prompt("Qual a quantidade de horas: "));
        segundos = horas * 3600;
        console.log(`${horas} horas(s) equivale(m) a ${segundos} segundo(s)`);
        prompt();
    }
    else if (opcao == 6) {
        console.log("Transformação de Segundos para Horas")
        var segundos = parseInt(prompt("Qual a quantidade de segundos: "));
        horas = segundos / 3600;
        console.log(`${segundos} segundo(s) equivale(m) a ${horas} hora(s)`);
        prompt();
    }
    else if (opcao == 7) {
        return false;
    } else {
        console.log("Opção inválida")
    }
}
