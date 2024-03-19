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

botao.onclick = traduzir

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
        textArea.classList.add('campos_escuros')
    } else {
        escuro = false
        container.classList.remove('container_escuro')
        body.classList.remove('body_escuro')
        escrever.classList.remove('campos_escuros')
        imprimir.classList.remove('campos_escuros')
        p.classList.remove('branco', 'campos_escuros')
        textArea.classList.remove('campos_escuros')
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

function trocarTextoBotao() {

    const linguas = verificarSelect()

    botao.textContent = `Traduzir para ${linguas[1]}`
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
    console.log(response);
    
    const traducao = data.responseData.translatedText;
    document.getElementById('impressao').innerText = traducao;
    }
}