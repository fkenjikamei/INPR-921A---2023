//escopo de variáveis

//var => escopo global
//let => escopo de bloco
//const => constantes (valor nao pode mudar)

const umMinutoEmSegundos = 60;
console.log(umMinutoEmSegundos);
//umMinutoEmSegundos = 30; //errado ao atribuir valor para uma constante após a sua atribuição
console.log(umMinutoEmSegundos);

var valor1 = 10;

if(10 == 10) {
    console.log("Imprimindo DENTRO do if a variavel valor1")
    console.log(valor1);
}

console.log("Imprimindo FORA do if a variavel valor1")
console.log(valor1);


if(20 > 10) {
    var valor2 = 20;
}

console.log("Imprimindo FORA do if a variavel valor2")
console.log(valor2);

let valor3 = 30;

if(10 > 1) {
    console.log("Imprimindo DENTRO do if a variavel valor3")
    console.log(valor3);
}

if(20 > 2) {
    let valor4 = 4;
    console.log("Imprimindo DENTRO do if a variavel valor4")
    console.log(valor4);

    if("a" == "a") {
        console.log("Imprimindo DENTRO do segundo if a variavel valor4")
        console.log(valor4);
    }
}

console.log("Imprimindo FORA do if a variavel valor4")
console.log(valor4);