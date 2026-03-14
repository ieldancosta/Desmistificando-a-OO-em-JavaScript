// Construtora
function ProdutoC(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
const p1 = new ProdutoC("Teclado", 150);

// Factory
function criarProduto(nome, preco) {
    return { nome, preco };
}
const p2 = criarProduto("Mouse", 80);

console.log(p1, p2);