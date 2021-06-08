function solucao(ano) {
    copa = ano-2014
    resto = copa%4
    
    if (resto===0){
        console.log('COPA')
    } else if (resto===2){
        console.log('JOGOS')
    } else {
        console.log('MEH')
    }
}