const a = 1
const b = 2 
const c = 3

const obj1 = {a: a, b: b, c: c} //sintaxe extensa
const obj2 = {a, b, c} //sintaxe reduzida

console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.45

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
         //Função dentro do objeto
    },
    funcao2(){
        //funcao2 dentro do obejto
    }
}

console.log(obj5)