function getSpecialNumbers(from, to) {
  let spesialNumbers = []
  for (let index = from; index <= to; index += 1) {
    if (index % 3 === 0) {
      spesialNumbers.push(index)
    }
  }
  return spesialNumbers
}

console.log(getSpecialNumbers(1, 10)) // ==> [3, 6, 9]
getSpecialNumbers(-10, 10) // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2) // ==> [ ]
