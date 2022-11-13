const valores = [7.7, 8.9, 6.3, 9.2] // array = fazer uma lista na qual cada item tem seu valor, começando do 0 .
console.log(valores[0], valores[3])
console.log(valores[4])

//TESTANDO GIT HUB teste
valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores) // array = object