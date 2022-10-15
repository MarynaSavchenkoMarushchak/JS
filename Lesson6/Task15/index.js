// const includes = (arr, num) => {
//   for (let i = 0; i <= arr.length - 1; i += 1) {
//     if (arr[i] === num) {
//       console.log(true)
//       return true
//     }
//   }
//   console.log(false)
//   return false
// }
// // examples
// includes([1, 4, 8, 3], 3) // ==> true
// includes([1, 4, 8, 3], 5) // ==> false

const includes = (arr, num) => {
  let newArr = []
  if (!Array.isArray(arr)) {
    return -1
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === num) {
        newArr.push(arr[i] + ':true')
      } else {
        newArr.push(arr[i] + ':false')
      }
    }
  }
  console.log(newArr)
  return newArr
}

includes([1, 4, 8, 3], 3) // ==> true
includes([1, 4, 4, 3], 4) // ==> false
