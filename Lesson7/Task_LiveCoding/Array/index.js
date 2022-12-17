function numbersList1(arr) {
  let lastNumer = arr.pop()
  console.log(lastNumer)
  console.log(arr)
}
numbersList1([1, 2, 3, 4, 5])

function numbersList2(arr) {
  let newNumber = 6
  console.log(arr.push(newNumber))
  console.log(arr)
}
numbersList2([1, 2, 3, 4, 5])

function numbersList3(arr) {
  let firstNumber = arr.shift()
  console.log(firstNumber)
  console.log(arr)
}
numbersList3([1, 2, 3, 4, 5])

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift,
//  а так же массив numbersList4 после выполнения unshift
function numbersList4(arr) {
  let newNum = 0
  arr.unshift(newNum)
  console.log(newNum)
  console.log(arr)
}
numbersList4([1, 2, 3, 4, 5])

// function anotherNumbersList(arr) {
//   const newArr = arr.filter(callback)
// }
// let anotherNumbersList = [5, 0, 8, 10, -4, 50, 220].filter(anotherNumbersList)
// console.log(arr)
// return arr >= 5

const getSpesialNum = (num) => {
  const result = num.filter((i) => {
    if (i > 5) {
      return true
    }
  })

  return result
}
const arr = [5, 0, 8, 10, -4, 50, 220]
console.log(getSpesialNum(arr))

// c помощью метода filter создай новый массив
// evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here
