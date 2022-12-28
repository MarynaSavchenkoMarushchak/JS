const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null
  }
  const newArr = []
  arr.map((i) => {
    if (i % 2 === 0) {
      newArr.push(i + delta)
    }
  })
  return newArr
}
console.log(increaseEvenEl([-10, 0, 2, 3, 4, 5, 6], 10))
