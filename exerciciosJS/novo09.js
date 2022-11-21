//Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
//pares e que também tenham índices pares.
//💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
//2 é zero.

function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){
    const numeroPar = numeros[i] % 2 === 0
    if(numeroPar)
    resultado.push(numeros[i])
    }
    return resultado
    }
console.log(receberSomenteOsParesDeIndicesPares([2, 3, 4, 5, 6]))    