//example1
const outerfunction = () => {
  console.log("The outer function is called")
  const innerFunction = () => console.log("The inner function is called")
  innerFunction()
}
outerfunction()

//example 2
const outerFunction1 = (name) => {
  console.log(`This name ${name} is called by outer Function`)
  const innerFunction1 = (name) => {
    console.log(`This name ${name} is called by innerFunction`)
  }
  innerFunction1(name)
}
outerFunction1("Musharaf")

//exampl 3
const outerFunction2 = (x, y) => {
  a = x * y
  console.log(a)
  const innerFunction2 = (a, y) => {
    b = a * y
    console.log(b)
  }
  innerFunction2(a, y)
}
outerFunction2(2, 3)

//Fuction scope in nested functions :
//=> the inside function can access the outside variables but the outside function cannot acceses the inside variables
