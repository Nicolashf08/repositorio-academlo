
const users = [
    {
        name: 'Erik',
        gender: 'male',
        age: 22,
    },
    {
        name: 'Daniela',
        gender: 'female',
        age: 22,
    },
    {
        name: 'Gustavo',
        gender: 'male',
        age: 49,
    },
    {
        name: 'María',
        gender: 'female',
        age: 35,
    },
];




let result
function findUser(users, name) {

  for (i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      result = users[i]
    }
  }
  return result
}
console.log(findUser(users, 'Gustavo'))



