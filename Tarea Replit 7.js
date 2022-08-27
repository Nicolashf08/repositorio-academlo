const users = [
{ name: 'Erik', email: 'erik@academlo.com' }, 
{ name: 'Georg', email: 'georg@academlo.com' }, 
{ name: 'Andrea', email: 'andrea@gmail.com' }
];

const email = 'andrea@gmail.com'

function deleteUser(users, email){
    for (i = 0; i < users.length; i++){
        
            if (users[i].email === email){
                users.splice(users.indexOf(users[i]), 1)
                
        }
        
    }
    return users
}

console.log(deleteUser(users, email))

// for (j = 0; j < email.length; j++)