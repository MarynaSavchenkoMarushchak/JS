//Input Arr
//Output Arr^2
/*
1. If NoArr return Null
2. If Arr return ArrNew ([i]*[i])

*/

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null
//   }
//   const newArr = []
//   arr.forEach((i) => {
//     newArr.push(i * i)
//   })
//   console.log(newArr)
//   return newArr
// }

const squareArray = (arr) => {
  const arrNew = arr.map((i) => i * i)
  return arrNew
}
console.log(squareArray([3, 5, 7, 12]))
