function teste1(num) {
    if(num > 7) {   // usar {} nas estruturas de controle
    console.log(num)
    console.log('Final')
    }
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{ // cuidado ao usar ; nas estrutas de de controle pois ele finaliza a linha do código
        console.log(num)
    }
}

teste2(6)
teste2(8)