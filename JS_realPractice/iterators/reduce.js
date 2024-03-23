const numbers = [1, 2, 3, 4, 5]
const result1 = numbers.reduce((a, b) => {
  console.log(a, b)
  console.log(a + b)
  return a + b
})

const result2 = numbers.reduce((a, b) => {
  console.log(a, b)
  console.log(a + b)
  return a + b
}, 20)
console.log(result2)
