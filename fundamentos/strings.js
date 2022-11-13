const escola =  "Minha String"

console.log(escola.charAt(4))
console.log(escola.charAt(15)) // retornou nula
console.log(escola.charCodeAt(1)) // codigo relacionado ao UNICODE
console.log(escola.indexOf("1"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))


console.log('Frase: '.concat(escola).concat('!'))
console.log(escola.replace(2, '1'))

console.log('Ana, Maria, Pedro'.split(',')) // Formou uma Array com 3 elementos