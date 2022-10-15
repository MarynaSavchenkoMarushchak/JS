// const sortAsc = (array) => {
//   if (!Array.isArray(array)) {
//     return null
//   } else {
//     for (let i = 0; i < array.length; i += 1) {
//       for (let j = 0; j < array.length; j += 1) {
//         if (array[i] < array[j]) {
//           const temp = array[i]
//           array[i] = array[j]
//           array[j] = temp
//         }
//       }
//     }
//   }
//   console.log(array)
//   return array
// }
// sortAsc([56, 88, 0, 23, 15])
// /*
// 1)

// */

// const sortDesc = (array) => {
//   if (!Array.isArray(array)) {
//     return null
//   } else {
//     for (let i = 0; i < array.length; i += 1) {
//       for (let j = 0; j < array.length; j += 1) {
//         if (array[i] > array[j]) {
//           const temp = array[i]
//           array[i] = array[j]
//           array[j] = temp
//         }
//       }
//     }
//   }
//   console.log(array)
//   return array
// }
// sortDesc([56, 88, 0, 23, 15])

// const AscSortArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null
//   } else {
//     for (let i = 0; i < arr.length - 1; i += 1) {
//       for (let j = 0; j < arr.length - 1; j += 1) {
//         if (arr[i] < arr[j]) {
//           let temp = arr[i]
//           arr[i] = arr[j]
//           arr[j] = temp
//         }
//       }
//     }
//   }
//   console.log(arr)
//   return arr
// }
// AscSortArr([6, 2, 5, 0])
/*
i=0 6
j=0 6
Ne perestavlyaem

i=0 6
j=1 2
6!<2 Не переставляем
[6,2,5,0]

i=0 6
j=2 5
6!<5 Ne Переставляем
[6,2,5,0]


i=0 6
j=3 0
6!<0 Ne perestavlyaem


i=1 2
j=0 6
2<6 Perestavlyaem
[6,2,5,0]
temp=arr[1]=2
arr[0]=6
[6,6,5,0]
arr[0]=temp=2
[2,6,5,0]


i=1 6
j=1 6
[2,6,5,0]

i=1 6
j=2 5
Ne menyaem
[2,6,5,0]

i=1 6
j=3 0
Ne menyaem
[2,6,5,0]

i=2 5
j=0 2
Ne menyaem

i=2 5
j=1 6
Menyaem arr[i]=5<arr[j]=6
Temp=arr[2]=5
arr[2]=6
arr[1]=temp=5
[2,5,6,0]

i=2 6
j=2 6
Ne menyaem
[2,5,6,0]

i=2 6
j=3 0
Ne menyaem
[2,5,6,0]

i=3 0
j=0 2 
0<2 Menyaem
temp=arr[3]=0
arr[3]=arr[0]=2
arr[0]=temp=0
[0,5,6,2]

i=3 2
j= 1 5
2<5
Menyaem
temp=arr[3]=2
arr[3]=arr[1]=5
arr[1]=temp=2
[0,2,6,5]

i=3 5
j=2 6
Menyaem
5<6
temp=arr[3]=5
arr[3]=arr[2]=6
arr[2]=temp=5
[0,2,5,6]
*/
const DescSort = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    for (let i = 0; i < arr.length - 1; i += 1) {
      for (let j = 0; j < arr, length - 1; j += 1) {
        if (arr[i] > arr[j]) {
          let temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
        }
      }
    }
  }
  console.log(arr)
  return arr
}
DescSort([1, 7, 4, 2])
/*
i=0 1
j=0 1
Ne menyaem

i=0 1
j=1 7
Ne menyaem

i=0 1
j=2 4
Ne menayem

i=0 1
j=3 2
Ne menyaem

i=1 7
j=0 1
7>1
Menyaem
temp=arr[0]=1
arr[0]=7
arr[1]=temp=1
[7,1,4,2]

i=1 1
j=1 1
Ne menyaem

i=1 1
j=2 4
Ne menyaem

i=1 1
j=3 2
Ne menyaem

i=2 4
j=0 7
Ne menyaem

i=2 4
j=1 1
4>1
Menyaem

temp=arr[1]=1
arr[1]=4
arr[2]=temp=1
[7,4,1,2]

i=2 4
j=2 4
Ne menyaem

i=2 1
j=3 2
Ne meenyaem

i=3 2
j=0 7 
Ne menyaem

i=3 2
j=1 4
Ne menayem

i=3 2
j=2 1
2>1 Menyaem
temp=arr[2]=1
arr[2]=arr[3]=2
arr[3]=temp=1
[7,4,2,1]
*/
