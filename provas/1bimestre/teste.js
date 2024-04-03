const prompt = require('prompt-sync')({sigint: false});


var alunoA = parseFloat(prompt("Digite a nota: 1º Bimestre"));
var bimestreDois = parseFloat(prompt("Digite a nota: 2º Bimestre"));
var bimestreTres = parseFloat(prompt("Digite a nota: 3º Bimestre"));
var bimestreQuatro = parseFloat(prompt("Digite a nota: 4º Bimestre"));

if (totalA >= 7) {
    console.log(" O aluno foi aprovado por média = ",totalA)
} else if ( totalA >= 4 && totalA < 7) {
    console.log("Está de recuperação. Sua média foi: ",totalA)
} else if (totalA >= 6){
    console.log("O aluno foi aprovado na recuperação. Nota = ",totalA)
}else {
    console.log("xxxxO aluno está reprovado na recuperação. Média = ")
}

var alunoB = parseFloat(prompt("Digite a nota:1º Bimestre"));
var bimestrebDois = parseFloat(prompt("Digite a nota: 2º Bimestre"));
var bimestrebTres = parseFloat(prompt("Digite a nota: 3º Bimestre"));
var bimestrebQuatro = parseFloat(prompt("Digite a nota: 4º Bimestre"));

if (totalB >= 7) {
    console.log(" O aluno foi aprovado por média = ",totalB)
} else if ( totalB >= 4 && totalB < 7) {
    console.log("Está de recuperação. Sua média foi: ",totalB)
} else if (totalB >= 6){
    console.log("O aluno foi aprovado na recuperação. Nota = ",totalB)
}else {
    console.log("xxxxxO aluno está reprovado na recuperação. Média = ")
}


var alunoC = parseFloat(prompt("Digite a nota:1º Bimestre"));
var bimestrecDois = parseFloat(prompt("Digite a nota: 2º Bimestre"));
var bimestrecTres = parseFloat(prompt("Digite a nota: 3º Bimestre"));
var bimestrecQuatro = parseFloat(prompt("Digite a nota: 4º Bimestre"));

if (totalC >= 7) {
    console.log(" O aluno foi aprovado por média = ",totalC)
} else if ( totalC >= 4 && totalC < 7) {
    console.log("Está de recuperação. Sua média foi: ",totalC)
} else if (totalC >= 6){
    console.log("O aluno foi aprovado na recuperação. Nota = ",totalC)
}else {
    console.log("xxxxxxO aluno está reprovado na recuperação. Média = ")
}

var alunoD = parseFloat(prompt("Digite a nota:1º Bimestre"));
var bimestredDois = parseFloat(prompt("Digite a nota: 2º Bimestre"));
var bimestredTres = parseFloat(prompt("Digite a nota: 3º Bimestre"));
var bimestredQuatro = parseFloat(prompt("Digite a nota: 4º Bimestre")); 

if (totalD >= 7) {
    console.log(" O aluno foi aprovado por média = ",totalA)
} else if ( totalD >= 4 && totalD < 7) {
    console.log("Está de recuperação. Sua média foi: ",totalA)
} else if (totalD >= 6){
    console.log("O aluno foi aprovado na recuperação. Nota = ",totalD)
}else {
    console.log("sssssO aluno está reprovado na recuperação. Média = ")
}

var alunoE = parseFloat(prompt("Digite a nota:1º Bimestre"));
var bimestreeDois = parseFloat(prompt("Digite a nota: 2º Bimestre"));
var bimestreeTres = parseFloat(prompt("Digite a nota: 3º Bimestre"));
var bimestreeQuatro = parseFloat(prompt("Digite a nota: 4º Bimestre"));

if (totalE >= 7) {
    console.log(" O aluno foi aprovado por média = ",totalE)
} else if ( totalE >= 4 && totalE < 7) {
    console.log("Está de recuperação. Sua média foi: ",totalE)
} else if (totalE >= 6){
    console.log("O aluno foi aprovado na recuperação. Nota = ",totalE)
}else {
    console.log("xxxxxO aluno está reprovado na recuperação. Média = ")
}

var totalA = (alunoA + bimestreDois + bimestreTres + bimestrebQuatro)/4
    console.log("A nota final do aluno A é:",totalA)
var totalB = (alunoB + bimestrebDois + bimestrebTres + bimestrebQuatro)/4
    console.log("A nota final do aluno B é:",totalB)
var totalC = (alunoC + bimestrecDois + bimestrecTres + bimestrecQuatro)/4
    console.log("A nota final do aluno C é:",totalC)
var totalD = (alunoD + bimestredDois + bimestredTres + bimestredQuatro)/
    console.log("A nota final do aluno D é:",totalD)
var totalE = (alunoE + bimestreeDois + bimestreeTres + bimestreeQuatro)/4 
    console.log("A nota final do aluno E é:",totalE)

    if (totalA => 7) {
        console.log(" O aluno foi aprovado por média = ",totalA)
    } else if ( totalA => 4 && totalA < 7) {
        console.log("Está de recuperação. Sua média foi: ",totalA)
    } else if (totalA >= 6){
        console.log("O aluno foi aprovado na recuperação. Nota = ",totalA)
    }else {
        console.log("zzzzzO aluno está reprovado na recuperação. Média = ")
    }