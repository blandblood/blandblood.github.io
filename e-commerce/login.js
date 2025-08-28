const botaoLogin = document.querySelector('.login')
const botaoCarrinho = document.querySelector('.carrinho')

if (document.cookie == ''){
    botaoLogin.innerHTML = "<a href='profile/index.html'>👤 Login</a>";
    botaoCarrinho.style.visibility = 'hidden';

} else if (document.cookie != ''){
    botaoLogin.innerHTML = "<a href='profile/index.html'>👤 Perfil</a>";
    botaoCarrinho.style.visibility = 'visible';
}