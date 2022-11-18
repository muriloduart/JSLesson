function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123) // função construtora new, aponta para aula.prototype
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//simular o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até brevE', 456)

console.log(aula3, aula4)

