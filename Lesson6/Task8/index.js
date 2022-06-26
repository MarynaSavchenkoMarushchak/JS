const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    let newArr = []
    for (let index = 0; index <= arr.length - 1; index += 1) {
      if (arr[index] % 2 === 0) {
        newArr.push(arr[index] + delta)
      } else {
        newArr.push(arr[index])
      }
    }
    console.log(newArr)
    return newArr
  }
}

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20) // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10) // ===> [7, 11, 1]
increaseEvenEl([], 120) // ===> []
