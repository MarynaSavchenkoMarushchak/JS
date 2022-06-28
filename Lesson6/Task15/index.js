const includes = (arr, num) => {
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] === num) console.log(true)
  }
  return true
}
// examples
includes([1, 4, 8, 3], 3) // ==> true
includes([1, 4, 8, 3], 5) // ==> false
