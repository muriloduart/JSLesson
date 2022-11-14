function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //  Esse '||' significa 'ou'
    const comprarCel = trabalho1 && trabalho2 // Esse '&&' significa 'e'
    // const comprarTv = !!(trabalho1 ^ trabalho2) - bitwise xor (?)
    const comprarTv = trabalho1 != trabalho2 //simula um 'ou exclusivo' que é o msm cod. que o de cima bitwise xor
    const manterSaudavel = !comprarSorvete // operador unário


    return {comprarSorvete, comprarCel, comprarTv, manterSaudavel}
}

console.log(compras (true, true))
console.log(compras (true, false))
console.log(compras (false, true))
console.log(compras (false, false))