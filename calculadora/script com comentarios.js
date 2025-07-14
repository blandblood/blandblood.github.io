const debugar = document.querySelectorAll("#debug")
debugar.forEach(sla =>{
    sla.addEventListener('click', () =>{
        console.log("num1 é: ", num1);
        console.log("num2 é: ", num2);
        console.log("numeros é: ", numeros);
        console.log("total é: ", total);
        console.log("operacao é: ", operacao);
    })
})

// fiz esse botao de debug so pra eu nao ficar louco e ta me deixando mais louco ainda, ne foda

// Funções Básicas da Calculadora
function somar(a,b){
    x = Number(a)
    y = Number(b)
    return x + y
}

function subtrair(a,b){
    x = Number(a)
    y = Number(b)
    return a - b
}

function multiplicar(a,b){
    x = Number(a)
    y = Number(b)
    return a * b
}

function dividir(a,b){
    x = Number(a)
    y = Number(b)
    if (x = 0){
        console.log("Erro")
    }
    if (y = 0){
        console.log("Erro")
    }
    return x / y
}

function fazerOperacao(){
    if (operacao = '+')
        total = somar(num1,num2);
    else if (operacao = '-')
        total = subtrair(num1,num2);
    else if (operacao = '*')
        total = multiplicar(num1,num2);
    else if (operacao = '/')
        total = dividir(num1,num2);
    else
        console.log("sei lá que porra aconteceu, alguma merda deu.")
}
// -- FIM DAS FUNÇÕES DA CALCULADORA -- //

var display = document.querySelector(".display");
var total = 0;

display.innerHTML = total;

var num1;
var num2;
var operacao = "";

var numeros = [];

const botoes = document.querySelectorAll('#btn')
const operacoes = document.querySelectorAll('#operation')
const igual = document.querySelectorAll('#igual')

// ta, isso aqui em baixo meio que pega todos os botoes de numero 
// q foram colocados em uma array na const botoes ali em cima
// e fica observando se ele foi clicado, e se foi, pega o valor
// e coloca na array numeros, so que ele coloca como string e nao integer
// isso que ta me fudendo agora na real, tenho que descobrir como converter

botoes.forEach(botao =>{
    botao.addEventListener('click', (valor) =>{
        numeros.push(valor.target.value);
        total = numeros.join("")
        display.innerHTML = total;
    })
})

// KKKKKKKKK PRECISEI CONVERTER PORRA NENHUMA, eu literalmente só peguei
// o valor que tava no display na pagina e coloquei na var num1 e ele foi como int e nao string, perfeito

// agora é 2 da manha, eu estou enlouquecendo pq eu nao sei como eu faço pra essa porra
// ir pro num2, tentei colocar em função e nao vai, tentei colocar em if e tambem nao vai
// deixo isso pra amanha fds

operacoes.forEach(botaoOperacao =>{
    botaoOperacao.addEventListener('click', (valorOperacao) =>{
        operacao = valorOperacao.target.value;
        num1 = display.innerHTML
        numeros = [];
        total = 0;
        display.innerHTML = total;
    })
})

igual.forEach(botaoIgual =>{
    botaoIgual.addEventListener('click', ()=>{
        num2 = display.innerHTML
        fazerOperacao();
        operacao = '';
        numeros = [];
        display.innerHTML = total;
    })
})
