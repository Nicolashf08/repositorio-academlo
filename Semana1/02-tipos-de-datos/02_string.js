/*********************************/
/* TIPOS DE DATOS ==> #2 STRING */
/********************************/
// El tipo string representa cadenas de caracteres y debe ser entre comillas.
/*
Podemos usar comillas:
  - simples: 'Hola',
  - dobles: "como estas",
también podemos usar comillas invertidas: `bienvenido` (Backticks)
*/

const nombre = 'Pablo'
const apellido = "García"

const num1 = 5
const num2 = 3

// Concatenación de cadenas con el operador +
// console.log('El resultado de la operacion entre' + ' ' + num1 + ' y ' + num2 + ' ' + 'es:' + ' ' + (num1 + num2))

// console.log("La variable \"var\" no la deben usar")

// console.log("pera, \n mango, \n platano")

// Template literals o template strings
// Los template literals pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (${expresión}).
// console.log(`El resultado de la operacion
// entre ${num1} y ${num2} 
// es: ${num1 + num2}`)

// Las cadenas de texto son iterables, contienen indíces y pueden ser recorridas
let cadena = 'Hola cómo estan'
// H  o  l  a     c  o  m  o      e   s   t   a   n
// 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14

// console.log(cadena[0])
// console.log(cadena[6])
// console.log(cadena[14])

// La propiedad length nos devuelve el número de caracteres que tiene la cadena de texto
// console.log(cadena.length) // El total de indíces que tiene la cadena de texto + 1

// Los strings son inmutables, no se pueden modificar
const arreglo = ['a', 'b', 'c']
//                0    1    2
arreglo[0] = 'z'

// console.log(arreglo[0])

cadena[0] = 'Z'
// console.log(cadena[0])

// console.log(cadena[cadena.length - 1])

/**********************************/
/* TIPOS DE DATOS STRING METHODS */
/*********************************/
cadena = 'Hola soy una cadena de texto'

// charAt(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve una cadena vacía.
// console.log(cadena.length)
// console.log(cadena.charAt(28))
// console.log(cadena[28])

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.

// console.log(cadena.indexOf('texto'))
// console.log(cadena.indexOf('texto2'))
// console.log(cadena.indexOf('o', 7))

// lastIndexOf(valor, indíce) - Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
// console.log(cadena.lastIndexOf('o')) // 27
// console.log(cadena.lastIndexOf('o', 26)) // 6
// console.log(cadena.lastIndexOf('o', 5)) // 1

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está.

// console.log(cadena.includes('cadena')) // true
// console.log(cadena.includes('perro')) // false

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
// console.log(cadena.startsWith('Hola'))

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
const email = 'juan@gmail.com'
// console.log(email.endsWith('@gmail.com'))

// at(indíxe) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena.
// console.log(cadena.at(0))
// console.log(cadena.at(-2))
// console.log(cadena.at(28))

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
// console.log(cadena.toUpperCase())

// toLowerCase() - Devuelve la cadena en minúsculas.
// console.log(cadena.toLowerCase())

/* Extraer un trozo de una cadena */
// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena. No retorna el final.

// console.log(cadena.substring(0))
// console.log(cadena.substring(0, 4))
// console.log(cadena.substring(4, 0))
// console.log(cadena.substring(5, 8))
// console.log(cadena.substring(-1)) // No acepta negativos

// slice(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena. No retorna el final.
// console.log(cadena.slice(0))
// console.log(cadena.slice(0, 4))
// console.log(cadena.slice(-5))
// console.log(cadena.slice(12)) // No retorna el final.

// División de cadenas
// split(separador, limite) - Devuelve un array con las partes de la cadena que se separan por el separador especificado.
// cadena = 'esto-es-un-texto'
// console.log(cadena.split('-')[1])

// const nuevoArreglo = cadena.split(' ')
// console.log(nuevoArreglo)
// console.log(nuevoArreglo[nuevoArreglo.length -1])

// Recorte de espacios en blanco
// trim() - Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha.
const textoConEspacios = '     hola     '

// console.log('#', textoConEspacios, '#')
// console.log('#', textoConEspacios.trim(), '#')

// Búsqueda y sustitución de valores de cadenas
// replace(valor, nuevoValor) - Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.

// console.log(cadena.replace('texto', 'cadena'))
// console.log(cadena.replace(/texto/gi, 'cadena'))
// console.log(cadena.replaceAll('texto', 'cadena'))
// console.log(cadena.replace('Hola soy', '.').replace('soy', '.'))

// g - Reemplaza todas las apariciones del valor especificado.
// i - Ignora mayúsculas y minúsculas.
// m - Multi-linea.

// Repetición
// repeat(n) - Devuelve una cadena repetida n veces.
// console.log(cadena.repeat(3))

// Más Info: https://academlo.notion.site/Tipos-de-Datos-primitivos-ed3f754ef79f4ec1bad36290ce46442e
