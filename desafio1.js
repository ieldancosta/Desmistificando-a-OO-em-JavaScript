const usuario = { nome: "Carlos" };

// Adicionando
usuario.idade = 25;
// Alterando
usuario.nome = "Carlos Augusto";
// Apagando
delete usuario.idade;

console.log(usuario); // O motor permite pois a referência da memória é a mesma.