const getSubArray = (arr, numberOfElements) => {
  let newArr = []
  for (let i = 0; i <= numberOfElements - 1; i += 1) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return newArr
}
getSubArray([11, 6, 8, 9, 110], 2)
