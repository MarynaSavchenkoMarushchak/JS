// //input obj
// //output objClone

// 1.Создать новый объект
// 2.С помощью цикла Фор ин записать все ключи с objв  newObj

const copyObj = (obj) => {
  const newObj = {}
  console.log(obj)
  console.log(newObj)
  for (let key in obj) {
    newObj[key] = obj[key]
  }
  console.log(newObj)
  console.log(obj === newObj)
  return newObj
}

copyObj({
  city: 'Kherson',
  street: '49KGD',
  owner: 'Maryna',
  father: { name: 'Bob', age: 56 },
})
