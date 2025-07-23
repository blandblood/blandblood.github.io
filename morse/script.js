const alfabeto = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": '/'}
// const alfabetoMorse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

var texto = "";
var textArray = [];
var morse = "";
var morseArray = [];
var arrayTeste = [];


var caixaTexto = document.getElementById('texto');
var caixaMorse = document.getElementById('morse');
const textoParaMorse = document.getElementById('converterTextoMorse')

function converterTextoMorse(){
    textArray.forEach(letra =>{
        arrayTeste = textArray.map(letra => alfabeto[letra.toLowerCase()])
    })
    console.log(arrayTeste);
}


textoParaMorse.addEventListener('click', ()=>{
    texto = caixaTexto.value;
    textArray = [...texto]
    console.log(textArray)
    converterTextoMorse()
    caixaMorse.value = arrayTeste.join(' ');
})