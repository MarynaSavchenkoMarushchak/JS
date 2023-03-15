//input obj, string
//output obj

/*
1.Добавить в Oбъект новое свойство и ключ из string
2. Использовать оператор"Точка."
*/
function addPropertyV1(user, userId) {
  user.id = userId
  console.log(user)
  return user
}

function addPropertyV2(user, userId) {
  const id = {}
  id.id = userId
  console.log(id)
  Object.assign(user, id)
  console.log(user)
  return user
}
const addPropertyV3 = (user, userId) => {
  const newUser = {}
  newUser.name = user.name
  console.log(newUser)
  newUser.id = userId
  console.log(newUser)
  console.log(newUser === user)
  Object.assign({}, newUser, userId)
  console.log(newUser)
}
const addPropertyV4 = (user, userId) => {
  const newUser = {}
  newUser.name = user.name
  newUser.id = userId
  console.log(newUser)
  console.log(newUser === user)
  const id = userId
  const newUserList = { ...user, id }
  console.log(newUserList)
  console.log(user)
}

const user = {
  name: 'Sam',
}
addPropertyV1(user, '1234567') // ==> { name: 'Sam', id: '1234567' }
addPropertyV2({ name: 'Sam' }, '1234567')
addPropertyV3(user, '1234567')
addPropertyV4(user, '1234567')
