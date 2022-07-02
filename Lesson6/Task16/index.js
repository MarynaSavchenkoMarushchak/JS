const removeDuplicates = (array) => {
  if (!Array.isArray(array)) {
    return null
  } else {
    let newArray = []
    for (let i = 0; i <= array.length - 1; i += 1) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i])
      }
      // console.log(newArray)
    }
    return newArray
  }
}
removeDuplicates([3, 5, 3, 5, 6, 3])
removeDuplicates([55, 38, 55, 55, 55, 38])
removeDuplicates('')
