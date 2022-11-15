let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a  //implicitamente existe um return
console.log(dobro(Math.PI))



let ola = function(){
    return 'Olá'
}


ola = () => 'Olá' //função sem parâmetro
ola = _ => 'Olá'  // possui um param
console.log(ola())