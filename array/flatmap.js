const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: ' Gustavo',
        nota: 7.1
    },{
        nome: 'Ana', 
        nota: 8.2
    },{
        nome: ' Turma M2',
        alunos:[{
            nome: 'Joana',
            nota: 5.4
        },{
            nome: 'Bruna',
            nota: 5.5
        }]
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)


const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)