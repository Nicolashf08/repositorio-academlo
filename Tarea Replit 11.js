
const students = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
    { name: 'José', age: 27 },
    { name: 'José', age: 27 }
  ];
  
function findMostCommonAge(students) {
    let arreglo = []
    let variableFinal = 0
    for (i = 0; i < students.length; i++){
       arreglo.push(students[i].age)
       arreglo.sort() 
    }
    for (n = 0; n < arreglo.length; n++){
        if (arreglo[n + 1] === arreglo[n]){
            variableFinal = arreglo[n]
        }
    }
   return variableFinal
  }
  
  console.log (findMostCommonAge(students))