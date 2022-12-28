const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }
  const arrNew = arr.map((i) => i).reverse()
  console.log(arr)
  return arrNew
}
console.log(reverseArray([3, 6, 8, 9, 0]))
console.log(reverseArray('YellowAndBlue'))
