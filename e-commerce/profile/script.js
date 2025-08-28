const caixaLogin = document.getElementById('nome');
const botaoEntrar = document.querySelector('.entrar')
const telaLogin = document.getElementById('telaLogin')
const profilePage = document.getElementById('profilePage')
const textoUsuario = document.querySelector('.nomeDeUsuario')
const botaoSair = document.querySelector('.sair')

var nomeParaSalvar = '';
const nomeDeUsuario = getCookie('username');

console.log(nomeDeUsuario)

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
}

function login(){
    if (caixaLogin.value == ""){
        alert("Insira um nome de usuário.")
    }
    else{
        nomeParaSalvar = caixaLogin.value;
    }
    document.cookie = 'username=' + (nomeParaSalvar || '') + '; path=/'
} 

function sair(){
    document.cookie = 'username=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/' 
}

botaoEntrar.addEventListener('click', ()=>{
    login();
    window.location.reload();
})

if (nomeDeUsuario == undefined){
    telaLogin.style.visibility = 'visible';
    profilePage.style.visibility = 'hidden';

} else if (nomeDeUsuario != ""){
    telaLogin.style.visibility = 'hidden';
    profilePage.style.visibility = 'visible';
}

textoUsuario.innerHTML = nomeDeUsuario

botaoSair.addEventListener('click', ()=>{
    sair();
    window.location.reload();
})