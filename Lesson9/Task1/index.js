// //input obj
// //output array, keys
function getKeys(obj) {
  const arr = Object.keys(obj)
  const arr1 = Object.values(obj)
  const arr2 = Object.entries(obj)
  console.log(arr)
  console.log(arr1)
  console.log(arr2)
  // console.log(arr.forEach((i) => i))
}

getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' })

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

//input obj
//output arr sort obj[key]>18
const getAdult = (usersObj) => {
  const usersArr = Object.entries(usersObj)
  //{ Mary: 18, Sema: 25, And: 13 }=>[['Mary', 18],['Sema', 25],['And', 13]]
  const filteredUsersArr = usersArr.filter((i) => i[1] >= 18)
  //[['Mary', 18],['Sema', 25]]
  const usersNames = filteredUsersArr.map((i) => i[0])
  //[['Mary'],['Sema']]
  console.log(usersNames)
  return usersNames
}
getAdult({ Mary: 18, Sema: 25, And: 13 })

const getAdult1 = (usersObj) => {
  const result = Object.entries(usersObj)
    //{ Mary: 18, Sema: 25, And: 13 }=>[['Mary', 18],['Sema', 25],['And', 13]]
    .filter((i) => i[1] >= 18)
    //[['Mary', 18],['Sema', 25]]
    .map((i) => i[0])
  //[['Mary'],['Sema']]
  console.log(result)
  return result
}
getAdult1({ Mary: 18, Sema: 25, And: 13 })

const getAdult2 = (usersObj) =>
  console.log(
    Object.entries(usersObj)
      //{ Mary: 18, Sema: 25, And: 13 }=>[['Mary', 18],['Sema', 25],['And', 13]]
      .filter((i) => i[1] >= 18)
      //[['Mary', 18],['Sema', 25]]
      .map((i) => i[0])
  )
//[['Mary'],['Sema']]

getAdult2({ Mary: 18, Sema: 25, And: 13 })
