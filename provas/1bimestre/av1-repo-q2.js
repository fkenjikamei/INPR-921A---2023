const prompt = require("prompt-sync")();

let latao = parseInt(prompt("Digite o valor do latão: "));
let metal = latao / 70
let zinco = latao / 30

console.log("Metal = ", metal);
console.log("Zingo = ", zinco);