class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{ // extends = define que um determina classe/função terá como protótipo uma outra função a partir da classe avo
    constructor(sobrenome, profissao =  'Professor'){
        super(sobrenome) //chamar a função construtora da super classe(avo)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super ('Silva')
    }
}

const filho = new Filho
console.log(filho)