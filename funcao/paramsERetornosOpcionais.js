function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m²`)
    }else {
        return area
    }
} 

console.log(area(2, 10))
console.log(area(2))
console.log(area())
console.log(area(2, 1, 1, 40, 100)) // Atribui somente aos dois primeiros parâmetros, ignorando o resto
console.log(area(2, 11))