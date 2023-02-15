//input obj
//output objClone

/*
1.Создать новый объект
2.Создать новые переменные ключей-свойств с помощью метода Энтриес
3.Записать в новый объект(присвоить) пары ключи-объекты из новых переменных

*/
const copyObj = (obj, player) => {
  const copyObj = Object.assign(obj, player)
  console.log(copyObj)
  return copyObj
}
copyObj(
  { name: 'Kherson', stree: '49KGD', owne: 'Maryna' },
  { city: 'Kiew', street: 'Dovjenko', owner: 'Semen' }
)
const copyObj1 = (obj) => {
  const newObj = { ...obj }
  console.log(newObj)
}
copyObj1({
  name: 'Kherson',
  stree: '49KGD',
  owne: 'Maryna',
  father: { name: 'Bob', age: 56 },
})
const copyObj2 = (obj) => {
  const copyObj = Object.entries(obj)
  const newObj = Object.assign(copyObj)
  console.log(copyObj)
  console.log(newObj)
  return copyObj
}
copyObj2({ name: 'Kherson', stree: '49KGD', owne: 'Maryna' })
