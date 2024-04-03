function fibo(num_limite) {
    let seq = [0,1]
    let c = 0

    while(seq[c]<=num_limite) {
        seq.push(seq[c]+seq[c+1])
        c++
    }
    return seq
}

console.log(fibo(200))