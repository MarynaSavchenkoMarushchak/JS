function getSum(arr) {
  let sum = 0
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index]
    if (!Array.isArray(arr)) {
      return null
    }
  }
  console.log(sum)
  return sum
}

getSum([1, 10, -10, 4]) // ==> 5
getSum([1]) // ==> 1
getSum([-8, 8]) // ==> 0
getSum(10, 12, 14) // ==> null
