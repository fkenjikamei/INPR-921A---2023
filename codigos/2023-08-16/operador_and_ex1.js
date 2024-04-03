/**
 * 
 * npm install prompt-sync
 * 
 * Uma escola vai realizar uma excursão. No entanto, para poder ir, o estudante precisa ter autorização do responsável e ter pago o valor de 10 reais.
 */
const prompt = require('prompt-sync')({sigint: false});

var responsavel_autorizou;
var valor_pago;

responsavel_autorizou = prompt("Tem autorização do responsável? 1 - Sim / 2 - Não ");

valor_pago = prompt("Efetuou o pagamento? 1 - Sim / 2 - Não ");

if(responsavel_autorizou == "1" && valor_pago == "1") {
    console.log(">> Poderá ir a excursão!");
} else {
    console.log(">> Não pode ir a escursão!");
}