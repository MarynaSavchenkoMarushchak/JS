// let result = 0
// while (true) {
//   const userInput = prompt('Your number')
//   if (!userInput) {
//     break
//   }
//   result += Number(userInput)
// }
// console.log('Result:', +result)
let result = 1
for (let index = 10; index <= 20; index += 1) {
  if (index % 2 === 1) {
    continue
  }
  result *= index
}
console.log(result)
