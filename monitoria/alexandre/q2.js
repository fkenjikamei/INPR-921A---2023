function fib(limite) {
    let seq = [0,1]

    for(let i=0; i<=limite; i++) {
        let cont = 1
        for(let a = 1; a<=cont;a++) {
            let calculo = i+a;
            seq.push(calculo)
        }
        cont++
        console.log(seq)
    }
}

fib(39)