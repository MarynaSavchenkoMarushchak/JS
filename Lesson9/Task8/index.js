//input obj,key,value
//output obj with new values and keys
/*1.Добавить свойство и ключ в объект с пом.квадратных скобок
2.Использовать Object.assign,создать новый
объект и добавить в него свойство валюта,
объединить два объекта
 и изменить текущий obj
3.Object.assign newObj. Создать новый объект с новым свойством
Валюта.Объеденить объекты в Новом объекте
4.{...value,...key} спред-оператор, newObj

*/
const transaction = {
  value: 170,
}
const transaction2 = {
  value: 270,
}
const transaction3 = {
  value: 370,
}
const transaction4 = {
  value: 470,
}
function addPropertyV1(obj, key, value) {
  obj[key] = value
  console.log(obj)
  return obj
}

function addPropertyV2(obj, value, key) {
  const newObj = {}
  newObj[value] = key
  console.log(newObj)
  obj = Object.assign(obj, newObj)
  console.log(obj)
}
function addPropertyV3(obj, value, key) {
  const newObj = {}
  newObj[value] = key
  Object.assign(newObj, obj)
  console.log(newObj === obj)
}
function addPropertyV4(obj, value, key) {
  let newObj = {}
  newObj[value] = key
  newObj = { ...obj, ...newObj }
  return newObj
}
addPropertyV1(transaction, 'currency', 'USD') // ==> { value: 170, currency: 'USD' }
addPropertyV2(transaction2, 'currency', 'USD')
addPropertyV3(transaction3, 'currency', 'USD')
addPropertyV4(transaction4, 'currency', 'USD')
