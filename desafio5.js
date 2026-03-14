const dados = {
    texto: "Olá",
    numero: 100,
    acao: function() { return "Sou uma função"; }
};

const jsonString = JSON.stringify(dados);
console.log(jsonString); 
// Resultado: {"texto":"Olá","numero":100} 
// A função 'acao' foi removida.