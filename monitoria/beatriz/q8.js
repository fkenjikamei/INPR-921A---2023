function fat(num) {
    let number = Number.isInteger(num)

    var soma = soma * number
    while(num > 0) {
        if(number) {
            console.log(num)
            return soma
        } else {
            console.log("Nao é um numero inteiro")
            return 0
        }
    }
}

fat(100)