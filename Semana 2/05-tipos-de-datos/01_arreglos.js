/**************************************/
/* TIPOS DE DATOS ==> ARREGLOS ARRAY */
/*************************************/
// Array (llamada en español arreglo o matriz/vector) para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice.

// Declaración de un arreglo
const arregloVacio = []

// Podemos agregar elementos a un arreglo
const arregloDeNombres = ['Juan', 'Paco', 'Miguel', 'Brayan', 'Hugo']
//                          0        1       2          3        4

// Acceder a un elemento del arreglo
console.log(arregloDeNombres[1]) // Paco
console.log(arregloDeNombres[3]) // Brayan

// Accediendo al ultimo elemento con la propiedad length
console.log(arregloDeNombres[arregloDeNombres.length - 1])

// Podemos reemplazar un elemento de un arreglo
arregloDeNombres[0] = 'Eduardo'
console.log(arregloDeNombres)

// Podemos agregar nuevos elementos al arreglo
arregloDeNombres[arregloDeNombres.length] = 'Maria'
console.log(arregloDeNombres)

console.log(arregloDeNombres.length)

// Truncar un arreglo
arregloDeNombres.length = 2
console.log(arregloDeNombres)
console.log(arregloDeNombres[2])

// Una forma más simple de limpiar un array seria:
arregloDeNombres.length = 0
console.log(arregloDeNombres)

arregloDeNombres[0] = 'Fernando'
console.log(arregloDeNombres)

// Podemos almacenar cualquier tipo de dato en un arreglo
const vector = [{}, true, 'hola', 34, function saludo () {return 'hola'}]
console.log(vector[4])

// Arrays multidimensionales
const matriz = [[1,2,3], [4,5,6], [7,8,9]]
// nivel 1         0        1        2
// nivel 2       0 1 2    0 1 2    0 1 2

console.log(matriz[0][0])
console.log(matriz[1][1])
console.log(matriz[2][2])

// Comprobar el tipo de dato de un arreglo
console.log(typeof matriz)
console.log(typeof '')
console.log(typeof 34)
console.log(typeof true)

console.log(Array.isArray(matriz))

/*************************************/
/* TIPOS DE DATOS ==> ARRAY METHODS */
/************************************/
const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandía', 'Melón', 'Pera']
//                  0         1        2         3         4        5
// Los métodos .indexOf, .lastIndexOf y .includes tienen la misma sintaxis y hacen básicamente lo mismo que sus contrapartes de strings, pero operan sobre elementos en lugar de caracteres:

// .indexOf(searchElement, index) – busca el elemento comenzando desde el index, y devuelve el index donde fue encontrado, de otro modo devuelve -1.

console.log(frutas.indexOf('Pera'))
console.log(frutas.indexOf('Melón'))
console.log(frutas.indexOf('Kiwi'))
console.log(frutas.indexOf('Pera', 2))

// .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
console.log(frutas.lastIndexOf('Pera'))
console.log(frutas.lastIndexOf('Pera', 4))
console.log(frutas.lastIndexOf('kiwi'))

// .includes(searchElement, index) – busca comenzando desde el índice, devuelve true en caso de ser encontrado.

console.log(frutas.includes('Pera'))
console.log(frutas.includes('Mango'))
console.log(frutas.includes('Pera', 2))
console.log(frutas.includes('Manzana', 1))

// Una pequeña diferencia de includes es que puede manejar correctamente NaN a diferencia de indexOf/lastIndexOf
const arreglo = [NaN, NaN, NaN]
console.log(arreglo.indexOf(NaN))
console.log(arreglo.includes(NaN)) 

// .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
console.log(frutas.toString())

// .join(glue) - se comporta igual que toString, pero además puede especificar el separador
console.log(frutas.join(' '))

// Final del arreglo
// .pop() - Extrae el último elemento del array y lo devuelve:
let extracto = frutas.pop()
console.log(extracto)

console.log(frutas)

// .push() - Agrega el elemento al final del array:
frutas[frutas.length] = 'Kiwi'
console.log(frutas)

frutas.push('Fresa', 'Mango')
console.log(frutas)

// Al principio del arreglo
// .shift() - Extrae el primer elemento del array y lo devuelve:
const manzana = frutas.shift()
console.log(manzana)

console.log(frutas)

// .unshift() - Agrega el elemento al principio del array:
frutas.unshift(manzana, 'Mandarina')
console.log(frutas)

// Otros métodos:
// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos
const g1 = ['Luis', 'Pedro', 'Juan']
const g2 = ['Maria', 'Ana', 'Mariana']
const nuevosEstudiantes = ['Brayan', 'Santiago']
const grupoParaReact = g1.concat(g2, 'Manuel', nuevosEstudiantes)
console.log(grupoParaReact)

// .splice(desde, cuantos, ...elementos) - desde (la posición) borra (cuántos elementos) e inserta nuevos elementos.
console.log(grupoParaReact.splice(0, 2))
console.log(grupoParaReact)
console.log(grupoParaReact.splice(1, 1))
console.log(grupoParaReact)
grupoParaReact.splice(2, 0, 'Maria', 'Pablo')
console.log(grupoParaReact)
console.log(grupoParaReact.splice(-2, 2))

// .slice(indiceInicio, indiceFinal) - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, no incluye el final.
const copy = grupoParaReact.slice()
copy.push('Jose')
console.log(copy)
console.log(grupoParaReact)

console.log(copy.slice(0))
// console.log(copy.slice(1))
console.log(copy.slice(-1))
console.log(copy.slice(0, 2))

// .reverse() - ordena el array de forma inversa y lo devuelve.
const numeros = [1,2,3,4,5]
console.log(numeros.reverse())

// .sort() - ordena el array y lo devuelve
const abc = ['z', 'b', 'a', 'c', 'x']
console.log(abc.sort())

console.log(['115', '5', '255', '100'].sort())

function comparar (a, b) {
  return b.age - a.age
}

// ejemplo de como pasar una funcion a sort
console.log([{age: 12}, {age: 35}, {age:25}].sort(comparar))

// 2 ejemplo de una funcion anonima
console.log([{age: 12}, {age: 35}, {age:25}].sort(function (a, b) {
  return a.age - b.age
}))

// Más información: https://www.notion.so/academlo/Arreglos-2a2ef0f854564c9baf7f7a7a4b888c20
