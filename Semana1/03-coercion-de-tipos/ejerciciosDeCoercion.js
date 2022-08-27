/**************************************/
/* Ejercicios con coercion de tipos: */
/*************************************/

// Realice una coercion inplicita
// console.log("mundo" + 2);
// Realice una coercion explicita

console.log(2 + '2') // 22
console.log(1 + 1 + '2') // 22
console.log('2' + 1 + 1) // 211
console.log(true + true) // 2
console.log(true / null) // Infinity
console.log('20' - true) // 19
console.log(true + '20') // true20
console.log(25 + undefined) // NaN
console.log(null + true) // 1
console.log('b' + 'a' + +'a' + 'a') //

console.log(Number([])) // 0
console.log(Boolean([false, false, false])) // true
console.log(String(false)) // false
console.log(String(Number(Boolean({})))) // 1

console.log(true + +'5') // 6
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+'5' - +'2') // 3
