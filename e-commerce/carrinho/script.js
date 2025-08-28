// tudo aqui em baixo é pra fazer mostrar todos os itens no carrinho

function criarNovoItem(produto){
    const novoItem = document.createElement('div');
    novoItem.setAttribute('class', 'item')
    const divTextos = document.createElement('div');
    divTextos.setAttribute('class', 'textos')
    const nomeTexto = document.createElement('h2');
    nomeTexto.innerHTML = 'nome'
    const precoTexto = document.createElement('h3');
    precoTexto.innerHTML = 'preço'
    const criarBotaoRemover = document.createElement('button');
    criarBotaoRemover.setAttribute('class', 'remove')
    criarBotaoRemover.setAttribute('onclick', 'removerDoCarrinho()')
    criarBotaoRemover.innerHTML = 'Tirar do Carrinho'
    const separador = document.createElement('div')
    separador.setAttribute('class', 'separador')

    document.querySelector('.items').appendChild(novoItem);
    novoItem.appendChild(divTextos);
    divTextos.appendChild(nomeTexto); 
    divTextos.appendChild(precoTexto);
    novoItem.appendChild(criarBotaoRemover)
    document.querySelector('.items').appendChild(separador)

    nomeTexto.innerHTML = produto.nome;
    precoTexto.innerHTML = 'R$ '+produto.preco+',00';
}

carrinho.forEach(produto =>{
    criarNovoItem(produto)
})


// aqui pra baixo é calcular o preço total dos produtos e mostrar

const precoTotal = document.querySelector('.precoTotal')
var somaDosPrecos = 0;

var precosIndividuais = carrinho.map(produto => produto.preco)

for (let i = 0; i < precosIndividuais.length; i++){
    somaDosPrecos += precosIndividuais[i]
}

precoTotal.innerHTML = 'R$ '+somaDosPrecos+',00';

// isso aqui é pra colocar um id incremental nos botoes de remover

let id = 0;
const botoesRemover = document.querySelectorAll('.remove')
botoesRemover.forEach(botao => {
    botao.id = id++
})

// e agora vou tentar remover logo

function removerDoCarrinho(){
    botoesRemover.forEach(botao =>{
        botao.addEventListener('click', (idBotao)=>{
            let produtoParaRemover = idBotao.target.id
            carrinho.splice(produtoParaRemover, 1)
            salvarCarrinho()
            window.location.reload()
        })
    })
}