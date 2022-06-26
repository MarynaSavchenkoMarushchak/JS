function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null
  } else {
    let newArr = []
    for (let index = 0; index <= arr.length - 1; index += 1) {
      newArr.push(arr[index] * arr[index])
    }
    console.log(newArr)
    return newArr
  }
}

squareArray([1, 10, 9, 11]) // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]) // ==> [100, 0, 16]
squareArray([1]) // ==> [1]
