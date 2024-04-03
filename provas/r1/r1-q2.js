const prompt = require('prompt-sync')({sigint: false});

const valorPorHora = parseFloat(prompt("Digite quanto você ganha por hora: "));
const horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "));

const salarioBruto = valorPorHora * horasTrabalhadas;
const impostoRenda = salarioBruto * 0.11;
const inss = salarioBruto * 0.08;
const sindicato = salarioBruto * 0.05;
const salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

console.log(`Salário Bruto: R$${salarioBruto.toFixed(2)}`);
console.log(`Imposto de Renda: R$${impostoRenda.toFixed(2)}`);
console.log(`INSS: R$${inss.toFixed(2)}`);
console.log(`Sindicato: R$${sindicato.toFixed(2)}`);
console.log(`Salário Líquido: R$${salarioLiquido.toFixed(2)}`);

if (salarioLiquido < 1000) {
    console.log("Classificação do Salário: Baixo");
} else if (salarioLiquido >= 1000 && salarioLiquido < 5000) {
    console.log("Classificação do Salário: Médio");
} else {
    console.log("Classificação do Salário: Alto");
}