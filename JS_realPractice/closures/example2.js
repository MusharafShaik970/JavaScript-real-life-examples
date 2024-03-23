function adder(x) {
  return function (y) {
    return x + y
  }
}
const fiveAdder = adder(5)
const tenAdder = adder(10)
console.log(fiveAdder(2))
console.log(tenAdder(2))
