let phrase = "Hola, me llamo Erik";
let letter = 'a'


let conteo = 0
function countLetter(phrase, letter) {
    
    const nuevoArreglo = phrase.split("")
    for (i = 0; i < nuevoArreglo.length; i++){
        if (letter === nuevoArreglo[i]){
            conteo++
        }
    }
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable total
    // return total;
return conteo
  }
  console.log(countLetter(phrase, letter))