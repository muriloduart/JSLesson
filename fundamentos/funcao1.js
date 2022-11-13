//FUNCAO SEM RETORNO
function imprimirSoma(a, b){
console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma('Mur', "ilo")
imprimirSoma(2, 10, 50, 30) //soma sobre os dois primeiros a e b
imprimirSoma('Murilo', 1)

//FUNCAO COM RETORNO

function soma (a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma('Mur', 'ilo')) //nao sei oq aconteceu aqui prof. nao comentou esse exemplo
