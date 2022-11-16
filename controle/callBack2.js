const notas =  [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas =[]
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[[i]]) //push para adicionar um elemento no array
    }
}
console.log(notasBaixas)

//Usando callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//Usando callback com Arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Melhorando o código acima
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)