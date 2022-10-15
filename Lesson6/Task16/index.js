// const removeDuplicates = (array) => {
//   if (!Array.isArray(array)) {
//     return null
//   } else {
//     let newArray = []
//     for (let i = 0; i <= array.length - 1; i += 1) {
//       if (!newArray.includes(array[i])) {
//         newArray.push(array[i])
//       }
//       // console.log(newArray)
//     }
//     return newArray
//   }
// }
// removeDuplicates([3, 5, 3, 5, 6, 3])
// removeDuplicates([55, 38, 55, 55, 55, 38])
// removeDuplicates('')

const removeDuplicates = (arr) => {
  let newArr = []
  if (!Array.isArray(arr)) {
    console.log('Not Array')
    return false
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
      }
    }
  }
  console.log(newArr)
  return newArr
}

removeDuplicates([3, 5, 3, 5, 6, 3])
removeDuplicates([55, 38, 55, 55, 55, 38])
removeDuplicates('')
