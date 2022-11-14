let carros = [];
carros.push({
    nome: 'Ferrari',
    cor: 'Vermelho',
    Ano: 2000
})

carros.push({
    nome: 'Corsa',
    cor: 'Amarelo',
    Ano: 1988
})

console.log(carros)
if(carros[0].Ano == 2000 && carros[0].cor == 'Vermelho'){
    carros.splice(0, 1)
}

 // remover 0

console.log(carros)
