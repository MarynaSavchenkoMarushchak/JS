const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    let cloneArr = []
    for (let i = 0; i <= arr.length; i += 1) {
      cloneArr = arr.slice()
    }
    console.log(cloneArr)
    return cloneArr
  }
}
cloneArr([8, 6, 7])
