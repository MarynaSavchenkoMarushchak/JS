const { method } = require('lodash')

let sum = 0

for (let index = 1; index <= 1000; index += 1) {
  sum += index
}

console.log(Math.trunc(sum / 1234) > sum % 1234)
