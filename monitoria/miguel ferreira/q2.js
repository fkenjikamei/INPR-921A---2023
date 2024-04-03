const prompt = require('prompt-sync')({sigint: false});

let array = [], num_ant = 0, num_atual = 1, copia = 0
let parar = parseInt(prompt("Limite da sequência? "))
array.push(num_ant)
array.push(num_atual)

while(num_atual <= parar) {
    copia = num_atual
    num_atual += num_ant
    num_ant = copia

    if(num_atual <= parar) {
        array.push(num_atual)
    }
}

print(a)