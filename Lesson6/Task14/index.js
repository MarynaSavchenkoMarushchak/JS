// const getSubArray = (arr, numberOfElements) => {
//   let newArr = []
//   for (let i = 0; i <= numberOfElements - 1; i += 1) {
//     newArr.push(arr[i])
//   }
//   console.log(newArr)
//   return newArr
// }

const getSubArray = (arr, arrLenght) => {
  let newArr = []
  for (i = 0; i <= arrLenght - 1; i += 1) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return newArr
}

getSubArray([11, 66, 88, 9, 110], 2)
