//Novo recurso introduzido no ES2015
const pessoa = { //criando um objeto
    nome: 'Murilo',
    idade: 34,
    endereco: {
        logradouro: 'Rua vatapa',
        numero: 15,
        bairro: 'Centro',
    }
}
console.log(pessoa)

//Tendo acesso somente ao nome e idade usando o DESTRUCTURING

const {nome, idade} = pessoa
console.log (nome, idade)

console.log(pessoa) // para ver que voltou a pegar o objeto inteiro

const { nome: n, idade: i } = pessoa

console.log(n, i) //Retorna Murilo 34

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)