const obj1 = {
  age: 17,
  name: 'Tom',
}

const obj2 = {
  student: false,
  name: 'Bob',
}

function mergeObjectsV1(obj1, obj2) {
  const listObj = Object.assign({}, obj1, obj2)
  console.log(listObj)
  /*{age: 17, name: 'Bob',student: false}e*/
  console.log(obj1 === listObj)
  console.log(obj1)
}

function mergeObjectsV2(obj1, obj2) {
  const listObj = Object.assign({}, obj2, obj1)
  console.log(listObj)

  /*student: false,name: 'Tom', age: 17} */
  console.log(obj1 === listObj)
  console.log(obj2 === listObj)
}

function mergeObjectsV3(obj1, obj2) {
  const listObj = { ...obj1, ...obj2 }
  console.log(listObj)
  console.log(obj1 === listObj)
  console.log(obj2 === listObj)
}

function mergeObjectsV4(obj1, obj2) {
  const listObj = { ...obj2, ...obj1 }
  console.log(listObj)
  console.log(obj1 === listObj)
  console.log(obj2 === listObj)
}

//mergeObjectsV1(obj1, obj2) // ==> { name: 'Bob', age: 17, student: false }
//mergeObjectsV2(obj1, obj2) // ==> { name: 'Tom', age: 17, student: false }
//mergeObjectsV3(obj1, obj2) // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV4(obj1, obj2) // ==> { name: 'Tom', age: 17, student: false }
