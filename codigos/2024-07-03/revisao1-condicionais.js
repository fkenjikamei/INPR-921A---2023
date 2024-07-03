const prompt = require("prompt-sync")({sigint:false});

//variáveis
var numeroTelefone;
let nome;
const dataNascimento = "01/01/2000";
var idade;

idade = parseInt(prompt("Digite a idade: "));

if(idade >= 18) {
  console.log("Maior de idade");
} else if(idade >= 0) {
  console.log("Menor de idade");
} else {
  console.log("Idade inválida");
}

console.log(typeof(idade));

var numeroCasa = parseInt(3.5);
console.log(numeroCasa)