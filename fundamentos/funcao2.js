// ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(1, 2)



// ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIALVEL
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(1, 2.5))

const imprimir = a => console.log(a)
imprimir('Será que vai imprimir?')

