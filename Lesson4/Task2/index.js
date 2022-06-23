let result = 1
const m = 1
const n = 3
for (let index = m; index <= n; index += 1) {
  if (index % 2 === 1) {
    result *= index
  }
}
console.log(result)
// let result = 1
// for (let index = 10; index <= 20; index += 1) {
//   if (index % 2 === 1) {
//     continue
//   }
//   result *= index
// }
// console.log(result)
