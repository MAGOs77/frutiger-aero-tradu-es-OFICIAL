


let input_text = document.querySelector(".input_text")
let traducao = document.querySelector(".caixa_de_tradução")
let idioma = document.querySelector(".idioma")



async function traduzir() {

    console.log(input_text.value)

    let endereco = "https://api.mymemory.translated.net/get?q="
        + input_text.value + "&langpair=pt-BR|"
        + idioma.value




    let resposta = await fetch(endereco)

    let dados = await resposta.json()

    traducao.innerHTML = dados.responseData.translatedText

    console.log(dados)

}

function ouvirvoz() {
    let voz = window.webkitSpeechRecognition

    let reconhecimento = new voz()

    reconhecimento.lang = "pt-BR"

    reconhecimento.onresult = (resultado) => {
         let textotrancicao = resultado.results[0] [0].transcript
         input_text.textContent = textotrancicao
    }



    reconhecimento.start()
}