//input arr
//output arr
//1.Новій масив создать
//2. Цикл
//3. Проверить, если arr[i]<arr[j]
// Тогда пуш  в новый массив
// //4. Если arr[i]>arr[j]
// Промежуточной переменной присвоить let perem = arr[i]
// arr[i]=arr[j]
// arr[j]=perem
//
// const sortDesc = (arr) => {
//   const newArr = []
//   newArr = arr
//   for (let i = 0; i < newArr.length; i += 1) {
//     for (let j = 0; j < newArr.length; j += 1) {
//       if (arr[i] < arr[j]) {
//         const perem = arr[i]
//         arr[i] = arr[j]
//         arr[j] = perem
//       }
//     }
//   }
//   console.log(newArr)
//   return newArr
// }

// sortDesc([56, 88, 0, 23, 15])

// // const sortDesc = (numbers) => {
// //     const sortedArray=numbers
// // }
// const sortDesc = (arr) => {
//   function compare(a, b) {
//     if (a > b) {
//       return 1
//     }
//     return -1
//   }
//   arr.sort(compare)
//   return arr
// }

// console.log(sortDesc([56, 88, 0, 0, 23, 15]))

// const sortDesc = (arr) => {
//   const newArr = [...arr]
//   newArr.sort((a, b) => b - a)
//   console.log(arr)
//   return newArr
// }

// console.log(sortDesc([56, 88, 0, 0, 23, 15]))
// const sortDesc = (arr) => {
//   const newArr = arr.slice()
//   newArr.sort((a, b) => b - a)
//   console.log(arr)
//   return newArr
// }

// console.log(sortDesc([56, 88, 0, 0, 23, 15]))
// const sortDesc = (arr) => arr.slice().sort((a, b) => b - a)

// const arr = [2, 3, 50, 35, 0]
// console.log(sortDesc(arr))

const sortArray = (arr) => arr.slice().sort((a, b) => a - b)

console.log(sortArray([1011, 108, 222, 21, 30, 4]))
/*
   2 4 1 5 21 18
1) 2 4 1 5 18 21
2) 2 1 4 5 18 21
3) 1 2 4 5 18 21
*/
