//input Объект
//output Массив имен жителей(плоский массив строк)
const obj = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
}

const getPeople = (obj) => {
  const arr = []
  arr[0] = {
    name: 'Jack',
  }
  arr[1] = {
    name: 'Andrey',
  }
  arr[2] = {
    name: 'Ann',
  }
  arr[3] = {
    name: 'Vasyl',
  }
  console.log(arr)
  newObj = Object.values(obj)
  console.log(newObj)
  arr.forEach((i) => console.log(i))
}
getPeople(obj)
