
function sumEvens(start, end) {
    let suma = 0
    for (n = start + 1; n < end; n++){
    if (n % 2 ===0){
        suma += n
    }
}
return suma
}
console.log(sumEvens(1, 10))