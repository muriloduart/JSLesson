// Usando a notação literal
const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object) //Criado a partir de uma função construtora
const obj2 = new Object
console.log(obj2)


//Funções Construtoras

function Produtos(nome, preco, desconto){
    this.nome = nome // preco e desconto ficam encapsulado,  nome fica pra fora do objeto - atributo público
    this.getPrecoComDesconto = () => {
        return preco * ( 1 - desconto)
    }
}

const prod1 = new Produtos('Caneta', 10.00, 0.15)
const prod2 = new Produtos('Lapis', 1.00, 0.5)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())


//Criando Objeto a partir de uma Função Factory(Padrão de Projeto)

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Murilo', 3000, 10)
const f2 = criarFuncionario('Marcelo', 6000, 15)
const f3 = criarFuncionario('Marília', 9000, 20)

console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função famosa que retorna um objeto:
const fromJson = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJson.info)