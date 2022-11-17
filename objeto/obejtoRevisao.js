// Objeto é uma coleção dinâmina de pares chave/valor
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 200


console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = { // Também é um obejto
    modelo: "A4",
    valor: 89000,
    proprietario:{
        nome: 'Murilo',
        idade: 34,
        end: {
            logradouro : "Rua dos Vatapa",
            numero: 100,
            bairro: 'Centro',
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 40
    }, {
        nome: 'Ana',
        idade: 88
    }],
    calcularValorSeguro: function() {
            // funcao do calcular valor seguro
    }

}

carro.proprietario.end.numero = 100000
carro['proprietario']['end']['logradouro'] = 'Avenida Gigante'
console.log(carro)


delete carro.condutores
delete carro.proprietario.end
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // condutores foi deletado retorna undefined
