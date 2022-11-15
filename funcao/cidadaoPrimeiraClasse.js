//Função em JS é First-Class Object (Citizens)
//Higher-order function

// criar de forma literal
function fun1() {} /// ()Aqui retorna o valor  {}Aqui fica o bloco de códigos

//Armazenar em uma variável
const fun2 = function () {}

//Armazeram função em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array) // Aqui puxou todo array
console.log(array[1]) // aqui puxou o array 1
console.log(array[2]) // aqui puxou o array 2
console.log(array[0] (2, 3)) //aqui puxou a func do array 0 e definiu os valor de 'a' e 'b' e retornou a soma

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro para outra função
function run(fun) {
    fun()
}

run(function() {console.log('Executando função.')})

//Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(1)
const tresMaisDois = soma(2, 3)
tresMaisDois(1)