//input obj
//output newObj sortet
/*
1.Создать новый обьъект
2. Цикл Фор Ин
3. Если свойство больше 18(obj[key]>=18)
То 
3. Создать новый ключ и присвоить ему ключ из старого Объекта
4. Создать новое свойство и присвоить ему свойство из старого Объекта
5. Консоль Новій объект
6.Вернуть новій объект
*/
const getAdults = (obj) => {
  const newObj = {}
  for (let key in obj) {
    if (obj[key] >= 18) {
      const newKey = key
      const newProps = obj[key]
      newObj[newKey] = newProps
    }
  }
  console.log(newObj)
  return newObj
}

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }) // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }) // ==> { Ann: 56 }
