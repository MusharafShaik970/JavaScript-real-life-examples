const radius = [1, 2, 3, 4, 5]
const area = function (radius) {
  return Math.PI * radius * radius
}

//**********
Array.prototype.calculate = function (logic) {
  let output = []
  for (i = 0; i < this.length; i++) {
    //this part between comments is a imposter of  synschronous Map HOF
    output.push(logic(this[i]))
  }
  return output
}
//*************

console.log(radius.calculate(area))
console.log(radius.map(area))
