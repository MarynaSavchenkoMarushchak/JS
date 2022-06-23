// let m = 10
// const n = 20
// let result = 1
// do {
//   if (m % 2 === 1) {
//     result *= m
//   }
//   m++
// } while (m <= n)
// console.log(result)
let result = 1
const m = 1
const n = 3
for (let index = m; index <= n; index += 1) {
  if (index % 2 === 1) {
    result *= index
  }
}
console.log(result)
