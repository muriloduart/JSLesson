// par nome     /  valor
const saudacao = 'Olá'


function exec(){
    const saudacao = 'Oaba!'
    return saudacao
}


//Obejtos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'PEDRO',
    idade: 32,
    peso: 90 + ' kg',
    endereço:{
        Logradouro: 'Rua da Pega',
        numero: 355
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)