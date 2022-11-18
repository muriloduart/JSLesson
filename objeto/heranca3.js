const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
console.log(filha1.corCabelo, filha1.nome)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} //writ = nao poder ser mudado = ,, enum = pode ser numerado
})

console.log(filha2.nome)
filha2.nome = 'Carla' // tentado alterar valor
console.log(`${filha2.nome}, tem o cabelo ${filha2.corCabelo} `)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // para descobrir quais sao os atributos por herança
        console.log(key) : console.log(`Por herança: ${key}`)  //não tenho a menor ideia do que ele fez aqui
}