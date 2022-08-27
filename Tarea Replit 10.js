
const students = [
    { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 3 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 3 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 3 },
    { name: 'Mónica', email: 'monica@gmail.com', country_id: 3 }
  ]

  const countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' },
    { id: 3, name: 'Japón' }
  ]


  function countStudents(students, countries, countryName) {
    let conteo = 0
    for (i =0; i < students.length; i++){
    for (n =0; n < countries.length; n++){
    if (countryName === countries[n].name && countries[n].id === students[i].country_id){
    conteo++
    }
  }
}
    return conteo
  }

  console.log(countStudents(students, countries, 'Japón'))