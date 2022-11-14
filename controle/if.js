function soBoaNoticia(nota){
    if (nota >= 7) { //Dentro () do if expressão que gera T OU F
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)


function seForVerdadeEuFalo(valor){
    if (valor){ // se for verdade executa
        console.log('É verdade: ' + valor)
    }
}

seForVerdadeEuFalo() // undefinied = F
seForVerdadeEuFalo(null) // null = F
seForVerdadeEuFalo(undefined )// mesmo exemplo do primeiro
seForVerdadeEuFalo(NaN) // Not a Number = F
seForVerdadeEuFalo('') // string vazia = F
seForVerdadeEuFalo(0) // unico número que é F
seForVerdadeEuFalo(-1) // outros números = V
seForVerdadeEuFalo(' ') // string que não é vazia = V
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([]) // Array vazio = V
seForVerdadeEuFalo([1, 2]) // Array com elementos = V
seForVerdadeEuFalo({}) // Objeto vazio = V