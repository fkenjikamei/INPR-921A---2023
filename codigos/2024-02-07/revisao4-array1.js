var nomes = [];
console.log(nomes);

var paises = ["BRA", "EUA", "ESP", "JPN"];
console.log(paises);

var arrayVariada = [1, "Nome", false, 3.5];
console.log(arrayVariada);

console.log(paises[2]);

console.log("Tamanho da array paises: ",paises.length);

for(let i=0; i<paises.length; i++) {
    console.log(paises[i]);
}

//Adicionando valores na array
paises.push("ARG"); //adiciona na última posição
console.log(paises);

paises.unshift("ITA"); //adicionando na primeira posição
console.log(paises);

paises.pop(); //removendo o ultimo item
console.log(paises);

paises.shift(); //removendo o primeiro item
console.log(paises);

console.log(paises.indexOf("BRA"));
console.log(paises.indexOf("CHL")); //vai retornar -1 porque nao existe na array

paises.splice(paises.indexOf("BRA"),1);
console.log(paises);
paises.splice(paises.indexOf("CHL"),1);