let array =  [20, 100]
let array2 = [30, 10]


function sumTwoArrays(array, array2) {
    let suma1 = 0
    let suma2 = 0
    
    for (let i = 0; i < array.length; i++){
        suma1 += array[i]
    }
    for (let n = 0; n < array2.length; n++){
        suma2 += array2[n]
    }
    let sum = suma1 + suma2
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
    // return sum;
    return sum
  }
  console.log(sumTwoArrays(array, array2))