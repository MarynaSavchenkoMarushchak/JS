//input arr
//output arr
//1.Проверить все элмассива, кратные 3 вернуть в нов.массив

// const getSpecialNumber = (numbers) => {
//   let specialNumbers = []
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] % 3 === 0) {
//       specialNumbers.push(numbers[i])
//     }
//   }
//   console.log(specialNumbers)
//   return specialNumbers
// }

// getSpecialNumber([2, 3, 4, 5, 6, 6, 9, 7, 12, 11])

// const getSpesialNumbers = (arr, count) => {
//   if (!Array.isArray(arr)) {
//     console.log('Not array')
//     return 'Not array'
//   } else {
//     let newArr = []
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] % count === 0) {
//         newArr.push(arr[i])
//       }
//     }
//   }
//   console.log(count, newArr.length, newArr)
//   return newArr
// }

// getSpesialNumbers([4, 6, 8, 9, 12], 3)
// getSpesialNumbers([4, 6, 8, 9, 12], 2)
// getSpesialNumbers([4, 6, 8, 9, 12], 6)
// getSpesialNumbers([4, 6, 8, 9, 12], 12)

// Использование цикла forEach вместо обычного For
//Функция chekIfSpesicalNumber - коллбек для forEach
//forEach получает свою ф-цию коллбек, он візівает
//єту ф - цию для каждого єлемента массива, коллбек будет с каждым
//эллементом что-то делать (проверка на кратность)
// const getSpecialNumbers = (arr) => {
//   let spesialNumbers = []
//   function chekIfSpesicalNumber(num) {
//     if (num % 3 === 0) {
//       spesialNumbers.push(num)
//     }
//   }
//   arr.forEach(chekIfSpesicalNumber)
//   console.log(spesialNumbers)
//   return spesialNumbers
// }

// getSpecialNumbers([3, 3, 2, 6, 6, 6, 9, 9, 9])

// const getSpecialNumbers = (arr) => {
//   let newArr = []
//   arr.forEach((i) => {
//     if (i % 2 === 0) {
//       newArr.push(i)
//     }
//   })
//   console.log(newArr)
//   return newArr
// }
// getSpecialNumbers([1, 3, 5, 6, 7, 8, 9])

// const getSpecialNumbers = (arr) => {
//   const result = arr.filter((i) => {
//     if (i % 3 === 0) {
//       return true
//     }
//     return false
//   })
//   return result
// }
// console.log(getSpecialNumbers([1, 3, 5, 6, 7, 8, 9]))

const getSpecialNumbers = (arr) => arr.filter((i) => i % 3 === 0)
console.log(getSpecialNumbers([1, 3, 51, 6, 7, 8, 9]))

// const getSpecialNumbers = (arr) => {
//   const result = arr.filter((num) => {
//     return num % 3 === 0
//   })
//   return result
// }
// console.log(getSpecialNumbers([1, 3, 51, 66, 7, 8, 99]))

// const getSpecialNumbers = (arr) => {
//   const result = arr.filter((num) => num % 3 === 0)
//   return result
// }
// console.log(getSpecialNumbers([1, 3, 51, 66, 7, 8, 99, 102]))

// const getSpecialNumbers = (arr) => {
//   return arr.filter((num) => num % 3 === 0)
// }
// console.log(getSpecialNumbers([1, 3, 51, 66, 7, 8, 99, 102]))

// const getSpecialNumbers = (arr) => arr.filter((num) => num % 3 === 0)
// console.log(getSpecialNumbers([1, 30, 51, 66, 7, 8, 99, 102]))
// const sliseArr = (arr) => {
//   console.log(arr.slice(1, 4))
//   console.log(arr.sort())
// }
// sliseArr([2, 4, 5, 6, 8])
