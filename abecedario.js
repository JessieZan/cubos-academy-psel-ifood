function solucao(letra, palavras) {
	let errou = 0
    for (let item of palavras){
        if (item[0] != letra){
         errou++  
        } 
    }
    console.log(errou)
}