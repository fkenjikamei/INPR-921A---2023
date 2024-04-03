console.log("Loop de 1 a 10");
for(let i=1; i<=10; i++) {
    console.log(i);
}

console.log("Loop de 1 a 10, mostrando apenas os ímpares");
for(let i=1; i<=10; i+=2) {
    console.log(i);
}

console.log("Loop de 1 a 10, mostrando apenas os pares");
for(let i=0; i<=10; i+=2) {
    if(i!=0)
        console.log(i);
}

console.log();
console.log("Imprimindo de 10 a 1");

for(let i=10; i>=1; i--) {
    console.log(i);
}

//Loop de 1 a 100 e mostrar apenas os números divisiveis por 4.
console.log("Imprimindo de 1 a 100 os divisores de 4");

for(let i=1; i<=100; i++) {
    if(i%4 == 0) {
        console.log(i)
    }
}

for(let i=4; i<=100; i+=4) {
    console.log(i)
}