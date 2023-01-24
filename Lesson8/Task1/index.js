// const prop = 'my'
// const person = {
//   amount: 17,
//   target: 'bank',
//   'my nume': 'Tom',
//   [prop + 'name']: 'value',
// }
// console.log(person)
// console.log(person.name)
// console.log((person.name = 'Djery'))
// console.log(person['my nume'])
// console.log(person[prop + 'name'])

const transformToObject = (arr) => {
  let object = {}
  arr.forEach((el) => {
    object[el] = el
  })
  return object
}
//[1,'text']={1:1, text:'text '}
console.log(transformToObject([1, 5, 6, 'text', 'Tom']))
console.log(transformToObject([]))
console.log(transformToObject(['a', 17.1, 'John Doe']))

const user = {
  name: 'Tome',
}
user.name = 'Bob'
console.log(user)

const a = { a: 18 }
const b = a
