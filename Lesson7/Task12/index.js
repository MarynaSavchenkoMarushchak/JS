const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    const averege = arr.reduce((accumulator, element) => accumulator + element)
    return averege / arr.length
  }
}
console.log(arrAverage([2, 2]))
console.log(arrAverage('It is me'))
