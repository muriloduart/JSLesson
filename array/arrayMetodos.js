const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //pop = tira o útimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // push = adiciona um elemento na última posição
console.log(pilotos)

pilotos.shift() //shift = remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // unshift = adiciona um elemento na primeira posição[0]
console.log(pilotos)

//splice= pode adicionar ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Massa' , 'Bottas')
console.log(pilotos)

// remover elementos
pilotos.splice(3, 1) // Bottas saiu
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // novo array a partir do elemento 2
console.log(algunspilotos1)


const algunspilotos2 = pilotos.slice(1, 4) // vai até o indice 4 sem adiociona-lo
console.log(algunspilotos2)