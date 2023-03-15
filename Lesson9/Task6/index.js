const obj = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }, { name: 'Tom' }, { name: 'Mary' }, { name: 'Sem' }],
  room3: [
    { name: 'Lyusy' },
    { name: 'Djim' },
    { name: 'Romy' },
    { name: 'Lesly' },
  ],
}

//input Obj
//output Arr with value
const getPeople = (obj) => {
  const sortObj = Object.keys(obj).forEach((i) => console.log(i))
}
getPeople(obj)
