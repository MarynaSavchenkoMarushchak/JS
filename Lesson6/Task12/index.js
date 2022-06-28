/*1. input Arrey
2. Output Array

1.Создать два новых массива.
2. Перебор в первом в порядке возростания
3. Условие(если первый меньший, записать его, присвоить 
    меньший следующему.
     если второй )



*/
function sortAsc(array) {
  let newArrrAsc = []
  let minEl = array[0]
  for (let i = 1; i <= array.length; i += 1) {
    if (array[i] < minEl) {
      minEl = array[i]
      newArrrAsc.push(minEl)
      minEl = array[i]
    }
  }
  console.log(newArrrAsc)
}
sortAsc([8, 15, 7, 14])
function compareNumbers(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const a = arr[i]
      const b = arr[j]
      if (a > b) {
        arr[i] = b
        arr[j] = a
      }
    }
  }

  return arr
}
