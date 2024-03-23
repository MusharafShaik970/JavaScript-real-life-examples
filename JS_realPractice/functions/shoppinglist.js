/*You are tasked with creating a shopping list calculator program using JavaScript. Your program should take an array of objects representing items on the shopping list. Each object contains properties for the item's name, quantity, and price per unit.

Your task is to write a function calculateTotalCost that calculates the total cost of all the items on the shopping list.

Here's an example of how the shopping list data might look:

javascript
Copy code
const shoppingList = [
  { name: "Apples", quantity: 3, pricePerUnit: 1.5 },
  { name: "Bananas", quantity: 2, pricePerUnit: 0.75 },
  { name: "Milk", quantity: 1, pricePerUnit: 2.0 },
  // Add more items as needed
];
Your function calculateTotalCost should:

Accept the shopping list array as its only parameter.
Calculate the total cost by multiplying the quantity of each item by its price per unit and summing up the costs of all items.
Return the total cost.
Write your function in three different ways:

Using a function declaration.
Using a function expression.
Using an arrow function with concise body syntax.
After writing your functions, test them with the provided shoppingList array and compare the results.*/

//using function declaraition:
// const shoppingList = [
//   { name: "apple", quantity: 3, pricePerUnit: 1.5 },
//   { name: "Bananas", quantity: 2, pricePerUnit: 0.75 },
//   { name: "Milk", quantity: 1, pricePerUnit: 2.0 },
// ]
// function calculateTotalCost(shoppingList) {
//   let totalCost = 0
//   for (const item of shoppingList) {
//     totalCost += item.quantity * item.pricePerUnit
//   }
//   return totalCost
// }
// console.log(calculateTotalCost(shoppingList))

//using function expression method
// const shoppingList = [
//   { name: "apple", quantity: 3, pricePerUnit: 1.5 },
//   { name: "Bananas", quantity: 2, pricePerUnit: 0.75 },
//   { name: "Milk", quantity: 1, pricePerUnit: 2.0 },
// ]
// let calculateTotalCost = function (shoppingList) {
//   let totalCost = 0
//   for (const item of shoppingList) {
//     totalCost += item.quantity * item.pricePerUnit
//   }
//   return totalCost
// }
// console.log(calculateTotalCost(shoppingList))
//now

//now

//by using arrow functions
let shoppingList = [
  { name: "apple", quantity: 3, pricePerUnit: 1.5 },
  { name: "Bananas", quantity: 2, pricePerUnit: 0.75 },
  { name: "Milk", quantity: 1, pricePerUnit: 2.0 },
]
let calculateTotalCost = (shoppingList) => {
  let totalCost = 0
  for (const item of shoppingList) {
    totalCost += item.quantity * item.pricePerUnit
  }
  return totalCost
}
console.log(calculateTotalCost(shoppingList))
