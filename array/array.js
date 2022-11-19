console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', ' Carlos', 'Ana') //forma mais extensa de criar array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Anaa'] //forma literal de criar array
console.log(aprovados [0])
console.log(aprovados [1])
console.log(aprovados [2])
console.log(aprovados [3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[4])
console.log(aprovados.length) // lengt = extensao do array

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados[8] === undefined)
aprovados.push('Abia2')
console.log(aprovados)


aprovados.sort() //sort = altera o array, organizando-o em ordem alfabética
console.log(aprovados)
console.log(aprovados[0])

delete aprovados[1] //deleta o elemento mas não organiza o array novamente
console.log(aprovados[1])
console.log(aprovados [2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 1')
//aprovados.splice(1, 0, 'Elemento 1', 'Elemento 1')
//(x,y) x= começa neste elemento(carlos) / y=quantos elementos vc quer excluir a partir do índice setado com x
// Pode tb já adicionar novos elementos (Opcional)
console.log(aprovados)
