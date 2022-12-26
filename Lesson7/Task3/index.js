/*
Input array[[array1],[array2]...[arrrayn]]
Output array[arr1,1rr2...arrn]
1. Преобразовать исходный массив в плоскиф массив,
 записать в Новый массив
2. Сортировать новый массив по возростанию (а-б)
*/
const flatArray = (arr) => {
  const flatArray = arr.reduce((acc, i) => {
    return acc.concat(i)
  }, [])
  return flatArray.sort((a, b) => a - b)
}
console.log(flatArray([111, [2, 303, 4], 5, [6]]))

// ;[1, 2, 3, 4].reduce(function (acc, i) {
//   console.log(acc + i)
//   return acc + i
// })
/*
1: 0 0+1
2: 1+2
3: 3+3
4: 6+4
*/

/*
[1,[4],[3,2,1],5].concat
[1,4,3,2,1,5]
*/

const flatAr = (arr) => arr.flat().sort((a, b) => a - b)

console.log(flatAr([111, [2, 403, 4], 505, [6]]))
