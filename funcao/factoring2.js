function criarProduto(nome, preco){ 
    return {
       nome, 
       preco,
       desconto: 0.1
    }
}

console.log(criarProduto('Cerveja', 10.99))
console.log(criarProduto('Refri', 6))
console.log(criarProduto('Agua', 4))