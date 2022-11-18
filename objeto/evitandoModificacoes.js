// Object.preventExtensions = Proibido adiconar chaves e valores ao objeto --- Pode excluir e modificar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome ='Borracha'
produto.nome.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -- Consegue alteras chaves e valores --- Proibido adicionar e remover
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = ' Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


//Object.freeze : selado + valores constantes