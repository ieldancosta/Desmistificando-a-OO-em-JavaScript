const ContaBancaria = {
    _saldo: 0,
    get saldo() { return this._saldo; },
    set saldo(valor) {
        if (valor < 0) console.error("Erro: Saldo não pode ser negativo!");
        else this._saldo = valor;
    }
};

ContaBancaria.saldo = -50; // Gera erro no console

const selado = Object.seal({ tipo: "Corrente" });
selado.tipo = "Poupanca"; // Permite alterar

const congelado = Object.freeze({ id: 1 });
congelado.id = 2; // Falha silenciosamente ou erro em 'strict mode'