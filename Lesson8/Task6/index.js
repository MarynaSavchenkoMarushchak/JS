// const pickProps = (obj, props) => {
//   let newObj = {}
//   for (let key in obj) {
//     for (let i of props) {
//       if (key === i) {
//         console.log(key + ':', obj[key])
//         const newKey = key
//         const newProps = obj[key]
//         newObj[newKey] = newProps
//         console.log(newObj) / 9
//       } else if ((key = i)) {
//         console.log(newObj)
//         return {}
//       }
//     }
//   }
//   console.log(newObj)
//   return newObj
// }

const pickProps = (obj, props) => {
  let newObj = {}
  for (let key in obj) {
    for (let i of props) {
      if (i === key) {
        const newKey = key
        const newProps = obj[key]
        newObj[newKey] = newProps
      }
    }
  }
  console.log(newObj)
  return newObj
}
pickProps({ Mark: 1, Bob: 2, Cat: 3 }, ['Mark', 'Cat', 'Bob']) // ==> { a: 1, c: 3 }
