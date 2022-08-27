
function getNMultiples(number, totalMultiples) {
    let multiplos = []
for (let n = (number + 1); n <= number; n++){
    if (n % number === 0){
        multiplos.push(n)
    }
}

    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable multiples
    // return multiples;
    return multiplos
  }
  console.log(getNMultiples(20, 2))