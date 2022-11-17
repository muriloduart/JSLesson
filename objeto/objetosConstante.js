//pessoa -> 123 ->{...}
const pessoa = {nome: 'Murilo'}
pessoa.nome = 'Marcelo'
pessoa.nome = 'Marília'
pessoa.nome = 'João'

console.log(pessoa)


// pessoa -> 456 -> {..}
//pessoa = { nome : 'Ana'}

Object.freeze(pessoa) // Congela o objeto, torna o objeto a uma constante

pessoa.nome ='Maria'
pessoa.end ='Rua ABC' //não consegue adicionar atributo a esse obeto
delete pessoa.nome // não deixa deletar o nome
console.log(pessoa.nome) // não deixa retornar Maria
console.log(pessoa) 

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)