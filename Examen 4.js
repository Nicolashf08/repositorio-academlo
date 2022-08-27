let text = 'Hola, me gusta la programacion'


// function findMostCommonLetter(text) {
//     let letraMasComun
//     let texto1 = text.toLowerCase()
//     let texto2 = texto1.replace(/,/g,"")
//     let texto3 = texto2.replace(/ /g,"")
//     let arreglo = texto3.split("")
//     arreglo.sort()
    
//     for (let n = 0; n < arreglo.length; n++){
//         if(arreglo[n] === arreglo[n + 1]){
//            letraMasComun = arreglo[n]

//         }
//     }
//     // escribe tu solución aquí
//     // Recuerda que en esta prueba debes "retornar" el resultado
//     // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonLetter
//     // return mostCommonLetter;
//     return letraMasComun
//   }
//   console.log(findMostCommonLetter(text))

  function findMostCommonLetter(text) {

let contarLetras = 0
let unicaLetra = []
let storageLetras = []

let texto1 = text.toLowerCase().split("")
for (let i = 0; i < texto1.length; i++)
if (texto1[i + 1] === texto1[i]){
    contarLetras++
}
else {
    unicaLetra.push(texto1[i])
    storageLetras.push(contarLetras)
    contarLetras = 1
}
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonLetter
    // return mostCommonLetter;
    return contarLetras
  }
  console.log(findMostCommonLetter(text))