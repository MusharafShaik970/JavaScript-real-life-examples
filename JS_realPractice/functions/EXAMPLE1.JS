const greet = (name) => {
  return `assalmu alaikum ${name}`
}
const executeFunction = (func) => {
  let name = prompt("enter your name")
  return func(name)
}
executeFunction(greet)
