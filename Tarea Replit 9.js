
const students = [
    { name: 'Georg', email: 'georg@academlo.com', score: 100 },
    { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
    { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
  ]

//   students.sort(function orderStudentsByScore(a, b) {
//     return a.score - b.score
    
//     })
//     console.log(students)
    
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable orderedData
    // return orderedData;
    function orderStudentsByScore (students){
        students.sort(function(a, b){
            return a.score - b.score
        })
        return students
    }
    console.log(orderStudentsByScore(students))