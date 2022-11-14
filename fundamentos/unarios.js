let num1 = 1
let num2 = 2

num1++ //pós-fixado
console.log(num1) // aqui soma, num1 passa a ter valor 2
--num1 // pre-fixado
console.log(num1) // aqui subtrai, num1 volta a ter valor 1

console.log(++num1 === num2--) // o posicionamento do '++' ou '--' influencia na preferência, se estiver na frente tem preferência
//aqui primeiro ele comparou, para depois subtrair
console.log(num1, num2)
console.log(num1 === num2)