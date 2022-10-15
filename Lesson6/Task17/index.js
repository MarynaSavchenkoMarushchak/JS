const uniqueCount = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }
  let arrNew = []
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (!arrNew.includes(arr[i])) {
      arrNew.push(arr[i])
    }
  }
  console.log(arrNew.length, arrNew)
  return arrNew.length
}
uniqueCount([44, 44, 44, 55, 66, 55, 66, 77, 77])
