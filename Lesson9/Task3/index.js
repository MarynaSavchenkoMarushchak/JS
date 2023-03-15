// //input obj
// //output array, keys
function getKeys(obj) {
  const arr = Object.keys(obj)
  const arr1 = Object.values(obj)
  const arr2 = Object.entries(obj)
  console.log(arr)
  console.log(arr1)
  console.log(arr2)
  // console.log(arr.forEach((i) => i))
}

getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' })

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
//input Obj
//output Keys with new string ather
/*
1.Метод объекта Object.keys(obj),
создали массив из ключей, отсеяв значения
2.Из массива ключей методом forEach(),
заменяющего цикл, поочередно вывели в консоль 
все названия ключей
*/
function getKeys(obj) {
  Object.keys(obj).forEach((i) => console.log(i))
}
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' })
