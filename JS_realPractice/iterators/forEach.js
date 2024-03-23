const shoppingItems = [
  { name: "apple", price: 20, howMany: 2 },
  { name: "banana", price: 10, howMany: 3 },
  { name: "pineapple", price: 30, howMany: 1 },
]
let totalCost = 0
shoppingItems.forEach((item) => {
  let itemCost = item.price * item.howMany
  console.log(`The cost of ${item.howMany} ${item.name}s is ${itemCost}.`)
  totalCost += itemCost
})
console.log(`The totalCost of all items is ${totalCost}`)
