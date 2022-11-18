//Json é um compartilhamento de dados entre sistemas ou até mesmo do entre sistemas iguais

const obj = {a: 1, b: 2, c: 3, soma() {return a + b}} // objeto + função
console.log(JSON.stringify(obj)) // somente dados, nao é executável(função nao vai)

// console.log(JSON.parse("{a: 1, b: 2, c: 3 }"))

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3 }"))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }'))

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e":[] } '))