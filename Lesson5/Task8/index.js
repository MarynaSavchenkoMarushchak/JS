function sum(from, to) {
  let sum = 0
  for (let index = from; index <= to; index += 1) {
    sum += index
  }
  console.log(sum)
  return sum
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    console.log(true)
    return true
  }
  console.log(false)
  return false
}
sum(5, 10) // ===> 45
sum(11, 11) // ===> 11

compareSums(5, 10, 5, 10) // ===> false
compareSums(5, 15, 3, 5) // ===> true
compareSums(-2, 5, 5, 9) // ===> false
