function fat(numero) {
    let final
    let cont = numero - 1
    for(let i = 0; i<= cont; i++) {
        let anterior = numero - i
        let calculo = numero * anterior
        final = calculo
        let calculoFinal = final*anterior
        final = calculoFinal
    }
    return final
}

console.log(fat(32))