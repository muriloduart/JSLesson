const alunos = [ 
    {nome: 'Murilo', nota: 7.3, bolsista: false},
    {nome: 'Marilia', nota: 9.2, bolsista: true},
    {nome: 'Marcelo', nota: 9.8, bolsista: false},
    {nome: 'Newton', nota: 8.7, bolsista: true},
]

// Desafio 1 : todos os alunos são bolsista ?

const todosbolsistas = (resultado, bolsista) => resultado || bolsista //ou
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))

// Desafio 1 : todos os alunos são bolsista ?
const todosbolsistas1 = (resultado, bolsista) => resultado && bolsista //ou
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas1))

console.log(alunos.map(a => a.bolsista))