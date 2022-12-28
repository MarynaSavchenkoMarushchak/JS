const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }
  const arrNew = arr.map((i) => i)
  return arrNew
}
console.log(cloneArr([16, 61, 166, 661]))
