const alunos = [ 
    {nome: 'Murilo', nota: 7.3, bolsista: false},
    {nome: 'Marilia', nota: 9.2, bolsista: true},
    {nome: 'Marcelo', nota: 9.8, bolsista: false},
    {nome: 'Newton', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)