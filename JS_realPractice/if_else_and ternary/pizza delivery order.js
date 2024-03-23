/*You are tasked with creating a program to calculate the total cost of a pizza order based on the size of the pizza, the number of toppings, and whether the customer wants delivery.

The cost of the pizza is determined as follows:

Small pizza: $10
Medium pizza: $12
Large pizza: $14
Each topping adds $2 to the cost of the pizza.

If the customer wants delivery, there is an additional delivery charge of $5.

Write a program that takes the following inputs:

Pizza size (small, medium, or large)
Number of toppings (non-negative integer)
Whether the customer wants delivery (true or false)
The program should output the total cost of the pizza order.

Your program should cover the following concepts:

If-else statements
Else-if (elif) statements
Ternary operator (conditional expression)*/

let pizza_size = prompt("Enter the size of pizza in small , medium , large")
let toppings = prompt("Enter the number of toppings ,if not required enter 0")
let isDelivery = prompt("Enter the answer in True or False")
isDelivery = isDelivery.toLowerCase() === "true"
pizza_size = pizza_size.toLowerCase()

//this is one methoid using objects.
let pizzaPrices = {
  small: 10,
  medium: 12,
  large: 14,
}
totalCost = pizzaPrices[pizza_size] + 2 * toppings
totalCost1 = isDelivery ? totalCost + 5 : totalCost
console.log(`The total cost of the pizza you ordered is $ ${totalCost1}`)

//this is the second methos using the swith case and ternary opearator
// switch (pizza_size) {
//   case "small":
//     pizza_cost = 10
//     break
//   case "medium":
//     pizza_cost = 12
//     break
//   case "large":
//     pizza_cost = 14
// }
// let totalCostOfPizza = isDelivery
//   ? pizza_cost + 2 * toppings + 5
//   : pizza_cost + 2 * toppings
// console.log(`The total cost of the pizza you ordered is $ ${totalCostOfPizza}`)
