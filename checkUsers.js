function checkUsers(userData) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    },
    {
      firstName: 'AaAa',
      email: 'aaaa@aaaa.com',
      password: 'aaaa'
    }
  ]
  const checkuser = users.find(user => user.email === userData.email && user.password === userData.password)
  if (checkuser) {
    return `${checkuser.firstName}`
  } return false

  // for (let i = 0; i < users.length; i++) {
  //   if (user.email === users[i].email && user.password === users[i].password) {
  //     return `${users[i].firstName}`
  //   } else {
  //     return false
  //   }
  // }
}

module.exports = checkUsers