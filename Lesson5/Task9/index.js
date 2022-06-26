function getPrimes(num) {
  for (let index = 1; index <= num; index += 1) {
    for (let indexSecond = 2; indexSecond <= index; indexSecond += 1) {
      if (index % indexSecond === 0 && indexSecond < index) {
        break
      } else if (indexSecond === index) {
        console.log(index)
      }
    }
  }
}
getPrimes(13)
