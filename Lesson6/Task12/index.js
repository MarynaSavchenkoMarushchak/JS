const sortAsc = (array) => {
  if (!Array.isArray(array)) {
    return null
  } else {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length; j += 1) {
        if (array[i] < array[j]) {
          const temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
    }
  }
  console.log(array)
  return array
}
sortAsc([56, 88, 0, 23, 15])
const sortDesc = (array) => {
  if (!Array.isArray(array)) {
    return null
  } else {
    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length; j += 1) {
        if (array[i] > array[j]) {
          const temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
    }
  }
  console.log(array)
  return array
}
sortDesc([56, 88, 0, 23, 15])
