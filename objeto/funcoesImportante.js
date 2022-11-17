const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 30
}
console.log(Object.keys(pessoa)) // keys = reorna chaves do objeto
console.log(Object.values(pessoa)) // values = retorna valores
console.log(Object.entries(pessoa)) // entries = pega a lista da chaves e valores em array

Object.entries(pessoa).forEach(([chave, valor]) => { //destrucruing = desestruturando os elementos de um array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // false
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // enumerable

// Obejct.assign (ECMAScript 2015)
const dest = { a:1 }
const o1 = {b:2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatenação para o primeiro atributo ' dest'

Object.freeze(obj)
obj.c = 1234
console.log(obj)