let result = 0
for (let index = 1; index <= 10; index++) {
  console.log('\n=> ' + index + ' <=')
  for (let secondIndex = 1; secondIndex <= 10; secondIndex++) {
    console.log(index + ' x ' + secondIndex + ' = ' + index * secondIndex)
  }
}
