const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null
  }
  let minEl = arr[0]
  let maxEl = arr[0]
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (minEl > arr[i]) {
      minEl = arr[i]
    } else if (maxEl < arr[i]) {
      maxEl = arr[i]
      console.log(maxEl)
    }
  }
  console.log(minEl)
  console.log(maxEl + minEl > 1000)
  return maxEl + minEl > 1000
}

checker([80, 25, 338, 140])
