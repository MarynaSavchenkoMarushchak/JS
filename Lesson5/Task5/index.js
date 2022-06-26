function getSum(numberFirst, NumberSecond) {
  let sum = 0
  for (let index = numberFirst; index <= NumberSecond; index += 1) {
    if (index % 2 === 0) {
      sum += index
    }
  }
  console.log(sum)
  return sum
}
getSum(0, 5)
