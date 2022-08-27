const users = [
    { name: "Erik", email: "erik@academlo.com", age: 20 },
    { name: "Georg", email: "georg@academlo.com", age: 30 },
    { name: "Daniel", email: "daniel@academlo.com", age: 40 }
  ]

  
 
  function getEmails(users) {
    const usersEmails = [];
    for (i = 0; i < users.length; ++i) {
      const userEmail = users[i].email
      if (userEmail) {
        usersEmails.push(users[i].email);
  
      }
      console.log(usersEmails);
  
    }
    return usersEmails;
  }
  console.log(getEmails(users));
  
