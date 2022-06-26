const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  } else {
    // let sum = 0
    let minEl = 0
    // let maxEl = 0
    for (let i = 0; i <= arr.length - 1; i += 1) {
      if (arr[i] < arr[i + 1]) {
        minEl = arr[i]
      }
    }
    console.log(minEl)
  }
}
checker([1, 2, 3, 4])
