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
const alfabetoMorse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " "}

var texto = "";
var textArray = [];
var morse = "";
var morseArray = [];
var arrayTeste = [];


var caixaTexto = document.getElementById('texto');
var caixaMorse = document.getElementById('morse');
const textoParaMorse = document.getElementById('converterTextoMorse')
const morseParaTexto = document.getElementById('converterMorseTexto')

function converterTextoMorse(){
    textArray.forEach(letra =>{
        arrayTeste = textArray.map(letra => alfabeto[letra.toLowerCase()])
    })
    console.log(arrayTeste);
}

function converterMorseTexto(){
    morseArray.forEach(codigo =>{
        arrayTeste = morseArray.map(codigo => alfabetoMorse[codigo])
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

morseParaTexto.addEventListener('click', ()=>{
    morse = caixaMorse.value;
    morseArray = morse.split(' ')
    console.log(morseArray)
    converterMorseTexto();
    caixaTexto.value = arrayTeste.join('');
})