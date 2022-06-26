function swap(numbers) {
  const [start, ...rest] = numbers
  return [...rest, start]
}

function swapManual(numbers) {
  let newNumbers = []
  for (let index = 1; index <= numbers.length - 1; index += 1) {
    newNumbers.push(numbers[index])
    // for(let num of numbers)
  }
  newNumbers.push(numbers[0])
  console.log(newNumbers)
}
swap([1, 10, 9, 11]) // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]) // ==> [10, 9, 11, 1]
