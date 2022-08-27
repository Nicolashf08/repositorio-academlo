
const users = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ];

  const attendances = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ];


  function mergeData(users, attendances) {
    for (i = 0; i < users.length; i++){
      for (j = 0; j < attendances.length; j++){
        if (users[i].email === attendances[j].email){
          users[i].attendance = attendances[j].attendance
        }
}}
   
    return users
}
console.log(mergeData(users, attendances))