let pal_cod = ""

let jogo = function(pal_secreta) {
    let quantCaract = pal_secreta.length;
    let palavra = []

    for(let i=0; i<quantCaract; i++) {
        palavra.push("_")
    }

    let result = ("Palavra secreta: ", palavra.join())
    return result
}

let existeLetra = function(letra, pal_secreta) {
    let novoResult = []

    for(let i=0; 1<pal_secreta.length; i++) {
        if(pal_secreta[i] == letra.toLowerCase) {
            novoResult.push(letra.toLowerCase)
        } else {
            novoResult.push("_")
        }
    }
    let nova_palavra = ("Palavra secreta: ",novoResult.join())

    if(nova_palavra == jogo(pal_secreta)) {
        console.log("Não existe essa letra na palavra")
    } else {
        return nova_palavra
    }
}

let pal_fim = pal_cod

let execJogo = function() {
    let x = prompt("Digite a palavra secreta: ")
    jogo(x)
}

let cont = 0
while(x != pal_fim) {
    let digiteLet = prompt("Digite uma letra: ")
    existeLetra(digiteLet)
    cont = cont+1
}
console.log("Número de tentativas: ", cont)

jogo("escola")

execJogo()