//concatPropertis
// const arr = ['ami', 'kot']
// for (let i of arr) {
//   console.log(i)
// }
// const obj = {
//   name: 'Tom',
//   age: 18,
//   city: 'Kherson',
// }

// for (let key in obj) {
//   console.log(obj[key])
// }
// for (let key in obj) {
//   console.log(key)
// }

// console.log(obj)

const concatProps = (obj) => {
  let arr = []
  for (let key in obj) {
    arr.push(obj[key])
    //Or I can use that method arr = arr.concat(obj[key])
  }
  return arr
}

console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })) // ==> ['John Doe', 17, 'football']
