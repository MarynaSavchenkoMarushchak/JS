function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null
  } else {
    let newArr = []
    for (let i = 0; i <= arr.length - 1; i += 1) {
      newArr.push(arr[i])
      newArr.reverse()
    }
    // newArr.reverse()
    console.log(newArr)
    return newArr
  }
}
reverseArray([3, 4, 5, 6])
// 3
// 34
// 435
// 534
// 5346
// 6435
