let text = 'Hola como estan'

function reverseText(text) {
    let arrayText = text.split('')
    let textoReverso = arrayText.reverse()
    return textoReverso.join("")
  }
  console.log(reverseText(text))