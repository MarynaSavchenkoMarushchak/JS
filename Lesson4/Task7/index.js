debugger
let sum = 0
for (let index = 0; index <= 1000; index += 1) {
  if (index % 2 === 0) {
    console.log('Found')
    sum += index
  }
}
console.log(sum)
if (sum * 5 >= 5000) {
  console.log('Bigger')
} else console.log('Smaller or equal')

// console.log(sum)
