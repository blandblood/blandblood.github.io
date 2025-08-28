var carrinho = [];
carregarCarrinho();

function adicionarCarrinho(id){
    const produtoParaAdicionar = lista.find(p => p.id === id);

    carrinho.push({...produtoParaAdicionar});
    salvarCarrinho();
    console.log(carrinho)
}

function salvarCarrinho(){
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function carregarCarrinho(){
    const carrinhoAtual = localStorage.getItem('carrinho')
    if (carrinhoAtual) {
        carrinho = JSON.parse(carrinhoAtual)
    }
}