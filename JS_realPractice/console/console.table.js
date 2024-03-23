//console.table
var user = {
  name: "Ravidu",
  age: 25,
  job: "writer",
}
console.table(user)
//console.table(array)
var cities = ["Washington", "Delhi", "London", "Stockholm"]
console.table(cities)
//console.table(array of arrays)
var Destinations = [
  ["USA", "Washington"],
  ["India", "Delhi"],
  ["UK", "London"],
  ["Sweden", "Stockholm"],
]
console.table(Destinations)
//console.table(array of objects)
var users = [
  {
    name: "Sam",
    age: 30,
  },
  {
    name: "John",
    age: 45,
  },
  {
    name: "Peter",
    age: 20,
  },
]
console.table(users)
//console.table(nested objects)
var roles = {
  writer: {
    firstname: "Ravindu",
    lastname: "Shehan",
    email: "ravindu@gmail.com",
  },
  reviewer: {
    firstname: "Ravindu",
    lastname: "Shehan",
    email: "ravindu@gmail.com",
  },
}
console.table(roles)
