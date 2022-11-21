const alunos = [
    {nome: 'Murilo', nota: 7.9},
    {nome: 'Marília', nota: 9.2},
    {nome: 'Marcelo', nota: 8.8},
    {nome: 'Newton', nota: 7.7},
]

//IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
