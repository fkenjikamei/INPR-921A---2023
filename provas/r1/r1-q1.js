const prompt = require('prompt-sync')({sigint: false});

var numerosPrimos = [];

for(let i=0; i<=100; i++) {
    let contDivisores = 0; 
    
    for(let j=1; j<=i; j++) {
        if(i % j == 0) {
            contDivisores++;
        }
    }
    
    if(contDivisores == 2) {
        numerosPrimos.push(i);
    }
}

console.log(`Foram encontrados ${numerosPrimos.length} números primos`);
console.log("Os números primos encontrados foram:")
console.log(numerosPrimos);