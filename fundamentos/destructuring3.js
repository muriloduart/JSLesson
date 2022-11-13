function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
//console.log(rand(obj))

//console.log(rand({max :50, min: 40})) // Mesmo cod. que o de cima, porém em uma só linha


console.log(rand(obj))
console.log(rand({min: 955 })) // aqui pega a partir de 955 pois setado novamente o mínimo
console.log(rand({})) // aqui pega de 0 a 1000 pois está vazio o {}