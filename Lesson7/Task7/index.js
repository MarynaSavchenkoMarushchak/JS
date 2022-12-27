const increaseEventEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null
  }
  newArr = arr
  newArr.forEach((i) => {
    if (i % 2 === 0) {
      console.log((result = i + delta))
    }
  })
  //   console.log(newArr.push(result))
  return newArr
}

increaseEventEl([1, 2, 3, 4, 5, 6], 10)
