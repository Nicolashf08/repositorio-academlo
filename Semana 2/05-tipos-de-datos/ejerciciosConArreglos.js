/****************************/
/* Ejercicios con Arreglos: */
/***************************/
const frutas = ['manzana', 'pera', 'uva', 'naranja', 'sandia']

/* Colocar el resultado después de cada // */
console.log(frutas[0]) // manzana
console.log(frutas[frutas.length - 1]) // sandia
console.log(frutas[3]) // naranja

frutas.push('kiwi')
console.log(frutas) //  [manzana, pera, uva, naranja, sandia, kiwi]

frutas.pop() // ten en cuenta que en el anterior agregamos un elemento mas al arreglo
console.log(frutas) // [manzana, pera, uva, naranja, sandia]
frutas.unshift('mango')
console.log(frutas) //[mango, manzana, pera, uva, naranja, sandia]

frutas.shift() // ten en cuenta que en el anterior agregamos un elemento mas al arreglo
console.log(frutas) //[manzana, pera, uva, naranja, sandia]

console.log(frutas.indexOf('uva')) // 2
console.log(frutas.indexOf('uva', 3)) // -1

console.log(frutas.lastIndexOf('manzana')) // 0
console.log(frutas.lastIndexOf('sandia')) // 4

console.log(frutas.includes('uva')) // true
console.log(frutas.includes('uva', 3)) // false

console.log(frutas.slice(2, 4)) // [uva, naranja]
console.log(frutas.slice(2)) // [ uva]

console.log(frutas.join(' ')) // 'manzana', 'pera', 'uva', 'naranja', 'sandia'
console.log(frutas.toString()) // 'manaza','pera','naranja','uva','sandia'

console.log(frutas.reverse()) //[sandia, naranja, uva, pera, manzana]

// Ordena de mayor a menor las edades de un arreglo de personas.
const people = [
  { name: 'Wladimir', age: 1 },
  { name: 'Pablo', age: 29 },
  { name: 'Andres', age: 55 },
  { name: 'Carlos', age: 2 },
  { name: 'Juan', age: 13 }
]

function comparar (a, b){
return b.age - a.age
}

console.log(people.sort(comparar))

// Supongamos que tenemos un arreglo de cadenas. Nos gustaría tener una copia ordenada del mismo, pero mantener el original sin modificar. Crea una copia del arreglo con las vocales ordenadas sin modificar el original.
const vocales = ['i', 'e', 'o', 'u', 'a']
const copyVocales = vocales.slice(0, vocales.length);
console.log(copyVocales.sort())

// Une dos arreglos en uno solo.
const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]
const nuevoArreglo = arreglo1.concat(arreglo2);
console.log(nuevoArreglo)
