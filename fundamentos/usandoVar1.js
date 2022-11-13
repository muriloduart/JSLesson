{
    {
        {
            {
                var sera = 'será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123  //VAR FICA SOMENTE DENTRO DA FUNCAO (VAR ESPECIFICA DENTRO DA FUNCAO)
    console.log(local)
}

var local = 321  // PODE FAZER OUTRA VAR COM O MESMO NOME FORA DA FUNCAO (VAR GLOBAL)
console.log(local)
teste()