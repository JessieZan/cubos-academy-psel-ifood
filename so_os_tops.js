function solucao(produtos) {
	let topDeLinha = 0
    let somaComuns = 0
    let totalTop = 0
    let percentual = 0
    let totalVendido = 0
    
    for(let item of produtos){
        let preco = item.preco
        if (preco>=10000){
            topDeLinha++
            totalTop += preco
        } else {
            somaComuns+=preco
        }
        totalVendido = totalTop+somaComuns
        percentual = totalTop/totalVendido
    }
    let resposta = {totalTop, percentual}
    console.log(resposta)
}