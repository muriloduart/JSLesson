Array.prototype.filter2 = function (callback) { // nao entendi, vida que segue...
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}



const produtos = [
    { nome: ' Notebook', preco: 2499, fragil: true },
    { nome: ' Ipad', preco: 5999, fragil: true },
    { nome: ' Copo de Vidro', preco: 12.49, fragil: true },
    { nome: ' Copo de Plastico', preco: 18.99, fragil: false },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))
