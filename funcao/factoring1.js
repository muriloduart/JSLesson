const prod1 = { // Construindo um objeto
    nome: 'Cerveja',
    preco: 10
}

const prod2 = { // Construindo um objeto
    nome: 'Refri',
    preco: 5
}

function criarProduto(){ // Usando Factoring
    return {
        Nome: 'Agua',
        Preco: 4
    }
}

console.log(criarProduto())