const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    let sum = 0
    for (let index = 0; index <= arr.length - 1; index += 1) {
      sum += arr[index]
    }
    console.log(sum > 100)
    return sum > 100
  }
}

// examples
checkSum([10, 10, 10]) // ===> false
checkSum([10, 99, 1]) // ===> true
checkSum([-6, -3, 200]) // ===> true
