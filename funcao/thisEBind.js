const pessoa = {
    saudacao: 'Bom dia!',
    falar(){ // Criando função falar dentro do objeto 'pessoa'
        console.log(this.saudacao)
    }
}
pessoa.falar()


const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e OO (objeto)
const falarDePessoa = pessoa.falar.bind(pessoa) // bind amarra um objeto
falarDePessoa()
