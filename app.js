'use strict'

const trocar = document.getElementById('trocar')
const titulo = document.getElementById('titulo')
const botao = document.getElementById('traduzir')
const img_escrever = document.getElementById('img_escrever')
const img_imprimir = document.getElementById('img_imprimir')
const tema = document.getElementById('escurecer')
const container = document.getElementById('container')
const body = document.querySelector('body')
const escrever = document.getElementById('escrever')
const imprimir = document.getElementById('imprimir')
const p = document.querySelector('p')
const textArea = document.querySelector('textarea')
const audioSaida = document.getElementById('audioSaida')
const audioEntrada = document.getElementById('audioEntrada')
let escuro = false

const brasil = './img/brasil 1.png'
const eua = './img/bandeira 1.png'
const it = './img/franca (1) 1.png'
const es = './img/espanha (1) 1.png'
const jp = './img/japao (1) 1.png'
const fr = './img/franca (1) 1.png'

let img1 = brasil
let img2 = eua

img_escrever.src = img1
img_imprimir.src = img2

botao.onclick = verificartexto
audioSaida.onclick = falar
trocar.onclick = inverterIdioma
audioEntrada.onclick = ativarReconhecimento



select1.addEventListener('change', function(){
    trocarImagens()
})

select2.addEventListener('change', function() {
    trocarTextoBotao()
    trocarImagens()
});

function verificarSelect(){
    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')

    const select1Index = select1.selectedIndex
    let linguaTraduzir = select1.options[select1Index].value
    console.log(linguaTraduzir);

    const select2Index = select2.selectedIndex
    let linguaTraduzida = select2.options[select2Index].value
    console.log(linguaTraduzida);

    let opcoesSelects = [linguaTraduzir, linguaTraduzida]
    
    return opcoesSelects
    
}

trocar.addEventListener('click', function(){

})

tema.addEventListener('click', function(){

    mudarCores()
})

function mudarCores(){

    console.log('cores');
    if(escuro == false){
        escuro = true
        container.classList.add('container_escuro')
        body.classList.add('body_escuro')
        escrever.classList.add('campos_escuros')
        imprimir.classList.add('campos_escuros')
        p.classList.add('branco', 'campos_escuros')
        textArea.classList.add('branco', 'campos_escuros')
        select1.classList.add('branco')
        select2.classList.add('branco')
        tema.src = './img/sol 1 (1).png'
        trocar.src = './img/troca (3) 1.png'
    } else {
        escuro = false
        container.classList.remove('container_escuro')
        body.classList.remove('body_escuro')
        escrever.classList.remove('campos_escuros')
        imprimir.classList.remove('campos_escuros')
        p.classList.remove('branco', 'campos_escuros')
        textArea.classList.remove('branco', 'campos_escuros')
        select1.classList.remove('branco', 'campos_escuros')
        select2.classList.remove('branco')
        tema.src = './img/lua 1.png'
        trocar.src = './img/image-removebg-preview (2).png'

    }

}

function trocarImagens(){    

    const linguas = verificarSelect()
    console.log(linguas[0]);
    

    if (linguas[0]=="pt") {
        img1 = brasil
        img_escrever.src = img1
    }
    if (linguas[0] =='en') {
        img1 = eua
        img_escrever.src = img1
    }
    if(linguas[0]=='it'){
        img1 = it
        img_escrever.src = img1
    }
    if (linguas[0] == 'es'){
        img1 = es
        img_escrever.src = img1
    }
    if (linguas[0] == 'ja'){
        img1 = jp
        img_escrever.src = img1
    }
    if (linguas[0] == 'fr'){
        img1 = fr
        img_escrever.src = img1
    }
    if (linguas[1]=="pt") {
        img2 = brasil
        img_imprimir.src = img2
    }
    if (linguas[1] =='en') {
        img2 = eua
        img_imprimir.src = img2
    }
    if(linguas[1]=='it'){
        img2 = it
        img_imprimir.src = img2
    }
    if (linguas[1] == 'es'){
        img2 = es
        img_imprimir.src = img2
    }
    if (linguas[1] == 'ja'){
        img2 = jp
        img_imprimir.src = img2
    }
    if (linguas[1] == 'fr'){
        img2 = fr
        img_imprimir.src = img2
    }
    // if(img1 == brasil && img2 == eua) {

    //     img1 = eua
    //     img2 = brasil

    //     img_escrever.src = img1
    //     img_imprimir.src = img2


        
    // } else {
        
    //     img1 = brasil
    //     img2 = eua

        
    //     img_escrever.src = img1
    //     img_imprimir.src = img2
    // }


}

function inverterIdioma(){

    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')

    const select1Index = select1.selectedIndex
    let linguaTraduzir = select1.options[select1Index].value
    console.log(linguaTraduzir);

    const select2Index = select2.selectedIndex
    let linguaTraduzida = select2.options[select2Index].value
    console.log(linguaTraduzida);    
    
    select1.selectedIndex = select2Index
    select2.selectedIndex = select1Index

    trocarImagens()

}

function trocarTextoBotao() {

    const linguas = verificarSelect()

    botao.textContent = `Traduzir para ${linguas[1]}`
}

function falar() {

    const textoTraduzido = p.textContent

    console.log('falou');

    if(textoTraduzido == '') {
        alert('não há nada para traduzir')
    }
    
    
    if ('speechSynthesis' in window) {
        var synth = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(textoTraduzido);
        // Define a voz a ser usada (opcional)
        // utterance.voice = synth.getVoices()[0]; // Você pode ajustar o índice para escolher uma voz específica
        // Inicia a síntese de fala
        synth.speak(utterance);
    } else {
        alert('Desculpe, seu navegador não suporta a síntese de fala.');
    }
}

function verificartexto(){
    const texto = document.getElementById('texto').value

    if(texto == "alice" || texto == 'Alice' || texto == 'ALICE'){
        mudarCores()
    } else {        
        traduzir()
    }
}

async function traduzir() {

    const linguas = verificarSelect()
    // console.log('pt');
    const texto = document.getElementById('texto').value;
    if(texto == null || texto == '') {
        alert('Escreva algo')
    } else {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${linguas[0]}|${linguas[1]}`
        const response = await fetch(url);
        console.log(url);
        
    const data = await response.json();
    
    const traducao = data.responseData.translatedText;
    document.getElementById('impressao').innerText = traducao;
    }
}

function ativarReconhecimento() {

    const texto = document.getElementById('texto')
    texto.innerHTML = ''

    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'pt-BR'; // Define o idioma para o reconhecimento (opcional)
    recognition.onresult = function(event) {
        const resultado = event.results[event.results.length - 1][0].transcript;
        console.log('fala: ' + resultado);
        texto.textContent = resultado
    };
    recognition.start();
}