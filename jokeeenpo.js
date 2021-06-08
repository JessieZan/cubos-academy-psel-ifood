function solucao(joao, andre) {
    if (joao === andre){
        console.log('EMPATE')
    } else if (joao === 'PEDRA' && andre ==='PAPEL'){
        console.log('ANDRE')
    } else if (joao ==='PAPEL' && andre ==='TESOURA'){
        console.log('ANDRE')
    } else if (joao ==='TESOURA' && andre ==='PEDRA'){
        console.log('ANDRE')
    } else {
        console.log('JOAO')
    }
}