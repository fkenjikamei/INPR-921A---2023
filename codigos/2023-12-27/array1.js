var carros = ["Civic", "Ka", "Focus", "Jetta", "Cruze", "Corolla"];
console.log(carros);

carros.push("Fusca");
console.log(carros);

carros.unshift("Uno");
console.log(carros);

carros.pop();
console.log(carros);

carros.shift();
console.log(carros);

carros.splice(1,1);
console.log(carros);

carros.splice(3,1);
console.log(carros);

var carros_removidos = carros.splice(1,2); //podemos receber o(s) elemento(s) removidos em uma nova array
console.log(carros_removidos);
console.log(carros);

carros.push("Fiesta");
carros.push("BMW");
carros.push("Ferrari");
console.log(carros);

var indiceCarroComprado = carros.indexOf("BMW");
console.log(indiceCarroComprado);

indiceCarroComprado = carros.indexOf("Celta");
console.log(indiceCarroComprado); //está retornando -1 porque o Celta não existe na array.