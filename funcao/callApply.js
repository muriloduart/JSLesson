function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Cerveja',
    preco: 10.00,
    desc: 0.1,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro  = { preco: 10000, desc: 0.5}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro)) // forma de passar parâmetros é diferente

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$' ]))