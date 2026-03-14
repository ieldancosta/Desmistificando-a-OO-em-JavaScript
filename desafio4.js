const Veiculo = {
    acelerar() { console.log("Vrum vrum..."); }
};

const Carro = Object.create(Veiculo);
Carro.modelo = "Sedan";

Carro.acelerar(); // Herdado de Veiculo
console.log(Carro.__proto__ === Veiculo); // true