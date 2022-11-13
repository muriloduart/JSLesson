console.log('01)', '1' == 1) // true pois está comparando valor e não o tipo( char / number)
console.log('02)', '1' === 1) // === aqui ele compara o tipo 'estritamente igual'
console.log('03)', '1' != 1) //diferente, comprando valor
console.log('04)', '1' !== 1) //estritamente diferente, comparando tipo

console.log('05)', 2 < 1) //menor
console.log('06)', 2 > 1) // maior
console.log('07)', 2 <= 1) //menos ou igual
console.log('08)', 2 >= 1) //maior ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // mesmo tipo e valor
console.log('11)', d1.getTime() == d2.getTime()) // mesmo tipo e valor
console.log('12)', undefined == null)
console.log('13)', undefined === null)

//via de regra na maioria das vezes usar === estritamente igual