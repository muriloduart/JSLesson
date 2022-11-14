const notas = [6.7, 7.4, 9.8, 8.1, 7,7] // isso é um array

for(let i in notas) {
    console.log(i, notas[i])
}


const pessoa = {    //isso é um obejto
    nome: 'Murilo',
    sobrenome: 'Duarte',
    idade: 34,
    peso: 80
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
