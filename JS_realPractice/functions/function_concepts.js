// Function with Rest Parameter:
// Write a function named average that takes any number of parameters and returns their average.
const average = (x, ...y) => {
  let sum = 0
  let i
  for (i = 0; i < y.length; i++) {
    sum += y[i]
  }
  let average = (x + sum) / (i + 1)
  return average
}
console.log(average(2, 3, 4, 5, 1))

//Method 2
const average1 = (...x) => {
  let sum = 0
  for (let item of x) {
    sum += item
  }
  return sum / x.length
}
console.log(average1(1, 2, 3, 4, 5))

// Function as Argument:
// Write a function named operate that takes two numbers a and b and a function operation. The operation function should take two parameters and perform an arithmetic operation on them. Call operate with two numbers and a function that multiplies them together.
const operate = (a, b, func) => {
  return func(a, b)
}
function add(x, y) {
  return x * y
}
let ha = operate(4, 5, add)
console.log(ha)

// Function Scope:
// Write a function named innerFunction inside another function named outerFunction. Attempt to log a variable outerVariable from outerFunction within innerFunction. What happens?
let outerFunction = () => {
  let innerFunction = () => {
    console.log("inner")
  }
  innerFunction()
  console.log("outer")
}
outerFunction()
innerFunction() //This cannot be accessed outside
