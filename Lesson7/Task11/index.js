function filterNames(arr, text) {
  return arr.filter((i) => i.includes(text) & (i.length >= 5))
}
console.log(
  filterNames(['Maa', 'Semen', 'Katya', 'Eniz', 'Enan', 'Marene'], 'en')
)
