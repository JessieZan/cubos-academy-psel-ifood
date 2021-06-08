function solucao(numero) {
    while(numero > 0){
        console.log(numero)
        numero--
    }
    console.log(0)
    console.log('KABUM')
}

function processData(input) {
	solucao(parseInt(input, 10));
} 