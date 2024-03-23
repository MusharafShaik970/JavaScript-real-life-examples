function createCounter() {
  let count = 0
  return function incrementCounter() {
    count++
    return count
  }
}
const buttonClickCounter = createCounter() //here buttonClickCounter is a function as it stores a function , it is somewhat likely to function expression initializing and calling.

// triggerrs button clicks
console.log(buttonClickCounter()) // Output: 1
console.log(buttonClickCounter()) // Output: 2
console.log(buttonClickCounter()) // Output: 3
console.log(buttonClickCounter())
//this gives same output as console.log(createCounter()) == console.log(createCounter()()).
