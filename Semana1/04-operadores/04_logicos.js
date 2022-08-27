/***************************/
/* OPERADORES ==> LÓGICOS */
/**************************/
// Hay cuatro operadores lógicos en JavaScript, aunque sean llamados lógicos, pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

/*
|| OR
&& AND
! NOT
?? ES NULO
*/

/******************************/
/* OPERADORES ==> LÓGICOS OR */
/*****************************/
// OR se representa con dos símbolos de línea vertical ||

// Hay 4 combinaciones lógicas posibles:
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false

// El resultado es siempre true excepto cuando ambos son false

console.log(0 || '' || NaN || null) // 1

const nombre = 'Jesús'
const apellido = 'Fernández'
const nombreDeUsuario = null

console.log(nombre || apellido || nombreDeUsuario || 'Anónimo')

// evalua izq -> der | convierte a bool si es true regresa el valor original | si todos dan false regresa el ultimo valor

const caso = false
const caso2 = true

console.log(caso || caso2)

/******************************/
/* OPERADORES ==> LÓGICOS AND */
/*****************************/
// AND es representado con dos ampersands &&
/* Todo lo contrario */

console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

// solo retorna true si ambos son valores verdaderos y false en cualquier otro caso.

// AND el primer valor falso
console.log(20 && NaN && 5)
console.log(true && false)

const caso3 = true
const caso4 = false
const caso5 = true

console.log(caso3 && caso4 && caso5)

const hora = 7
const min = 1
const seg = 0

console.log(hora === 7 && min === 0 && seg === 0)

console.log(1 && 5 && true && 'texto')

// Las reglas anteriores son similares a las de OR. La diferencia es que AND retorna el primer valor falso mientras que OR retorna el primer valor verdadero.

// La precedencia del operador AND es mayor que la de OR
console.log((true && false) || true)
console.log(true && false)
console.log(false || true)

// Recurda:
// - OR retorna el primer valor verdadero o el último valor si ninguno fue encontrado.

// - AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

/*******************************/
/* OPERADORES ==> LÓGICOS NOT */
/******************************/
// NOT es representado con un signo de exclamación !
console.log(true)

/*
El operador acepta un solo argumento y realiza lo siguiente:
  - Convierte el operando al tipo booleano: true/false.
  - Retorna el valor contrario.
*/

// Not !
console.log(!true)
// 1 Convierte el operando al tipo booleano: true/false.
console.log(Boolean(1))
// 2 Retorna el valor contrario.
console.log(!Boolean(1))

console.log(!1)
console.log(!0)

// Un doble NOT !!
console.log(!!1)
console.log(!!0)

// El primer NOT convierte el valor a booleano y retorna el inverso, y el segundo NOT lo invierte de nuevo. Tenemos una simple coerción explicita a booleano.

// La precedencia de NOT es la mayor de todos los operadores lógicos, antes de AND y OR.

console.log(true && false || !true)

/**********************************************/
/* OPERADORES ==> LÓGICOS NULLISH COALESCING */
/*********************************************/
// NULLISH COALESCING es representado con dos signos de interrogación ??

// Como este trata a null y a undefined de forma similar, usaremos un término especial para fines didacticos. Diremos que una expresión es “definida” cuando no es null ni undefined.

const height = 0
console.log(height || 'No se conoce su valor')
console.log(height ?? 'Esto no se va a mostrar')

let a = 0
const b = 45

console.log(a || b)
console.log(a ?? b)

// El || no distingue entre false, 0, un string vacío "", y null/undefined. Todos son lo mismo: valores “falsos”. Si cualquiera de ellos es el primer argumento de ||, obtendremos el segundo argumento como resultado.

// La precedencia del operador ?? es la misma de ||.

// Más Info: https://www.notion.so/academlo/Operadores-1e1430a1bb7e4c0e90650528e8a0d8b8
