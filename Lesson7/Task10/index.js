const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    const summa = arr.reduce((accumulator, i) => accumulator + i)
    return summa
  }
}
console.log(sum([8, 14, 33, 56, 4]))
console.log(sum([1, 2, 3, 4]))
console.log(sum('Hallo'))
console.log(sum([0, 1, 2, 3]))
