// const debugar = document.getElementById("debug")
// debugar.addEventListener('click', () =>{
//     console.log("num1 é: ", num1);
//     console.log("num2 é: ", num2);
//     console.log("numeros é: ", numeros);
//     console.log("total é: ", total);
//     console.log("operacao é: ", operacao);
//     console.log("===================================================")
// })

// Funções Básicas da Calculadora
function somar(a,b){
    x = Number(a)
    y = Number(b)
    return x + y
}

function subtrair(a,b){
    x = Number(a)
    y = Number(b)
    return x - y
}

function multiplicar(a,b){
    x = Number(a)
    y = Number(b)
    return x * y
}

function dividir(a,b){
    x = Number(a)
    y = Number(b)
    if (x == 0){
        return "Erro"
    }
    if (y == 0){
        return "Erro"
    }
    return x / y
}

function fazerOperacao(){
    if (operacao == "+"){
        total = somar(num1,num2);
    } else if (operacao == "-"){
        total = subtrair(num1,num2);
    } else if (operacao == "*"){
        total = multiplicar(num1,num2);
    } else if (operacao == "/"){
        total = dividir(num1,num2);
    } else
        console.log("sei lá oq aconteceu, deu merda.")
}
// -- FIM DAS FUNÇÕES DA CALCULADORA -- //

var display = document.querySelector(".texto");
var total = 0;

display.innerHTML = total;

var num1;
var num2;
var operacao = "";

var numeros = [];

const botoes = document.querySelectorAll('#btn')
const operacoes = document.querySelectorAll('#operation')
const igual = document.getElementById('igual')
const del = document.getElementById('delete')
const clear = document.getElementById('C')

del.addEventListener('click', ()=>{
    numeros.pop()
    total = numeros.join("")
    display.innerHTML = total;
})

clear.addEventListener('click', ()=>{
    numeros = [];
    num1 = undefined;
    num2 = undefined;
    operacao = "";
    total = 0
    display.innerHTML = total;
})

botoes.forEach(botao =>{
    botao.addEventListener('click', (valor) =>{
        numeros.push(valor.target.value);
        total = numeros.join("")
        display.innerHTML = total;
    })
})

operacoes.forEach(botaoOperacao =>{
    botaoOperacao.addEventListener('click', (valorOperacao) =>{
        operacao = valorOperacao.target.value;
        num1 = display.innerHTML
        numeros = [];
        total = 0;
        display.innerHTML = total;
    })
})

igual.addEventListener('click', ()=>{
    num2 = display.innerHTML
    fazerOperacao();
    numeros = [];
    display.innerHTML = total;
})
