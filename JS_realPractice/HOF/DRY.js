const radius = [3, 1, 2, 5]
//write code for finding the area , circumference , diameter of a circle , its radius is given above.write code 1)without DRY  2)using DRY principle

//without using DRY principle
const calculateArea = function (radius) {
  let output = []
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i])
  }
  return output
}

const calculateCircumference = function (radius) {
  let output = []
  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i])
  }
  return output
}

const calculateDiameter = function (radius) {
  let output = []
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i])
  }
  return output
}

console.log(calculateArea(radius))
console.log(calculateCircumference(radius))
console.log(calculateDiameter(radius))

//USING DRY PRINCIPLE:

const area = function (radius) {
  return Math.PI * radius * radius
}

const circumference = function (radius) {
  return 2 * Math.PI * radius
}

const diameter = function (radius) {
  return 2 * radius
}

const calculate = function (arr, logic) {
  let output = []
  for (i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]))
  }
  return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))
