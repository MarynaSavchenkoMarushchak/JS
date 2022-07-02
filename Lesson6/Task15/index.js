const includes = (arr, num) => {
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] === num) {
      return true
    }
  }
  console.log(false)
  return false
}
// examples
includes([1, 4, 8, 3], 3) // ==> true
includes([1, 4, 8, 3], 5) // ==> false
