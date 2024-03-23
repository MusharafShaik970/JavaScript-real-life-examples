//This program provides two typew of discount to the customers one is fixed amount discount and others is fixed price discount by taking totalPrice.
function calculateTotalPrice(cartItems, discountFunction) {
  const totalPrice = cartItems.reduce((a, b) => {
    let sum = a + b.price
    return sum
  }, 0)
  const discountedPrice = discountFunction(totalPrice)
  return discountedPrice
}

const applyPercentageDiscount = function (totalPrice) {
  const discountPercentage = 10
  const discountAmount = (discountPercentage / 100) * totalPrice
  return totalPrice - discountAmount
}

const applyFixedDiscount = function (totalPrice) {
  const fixedDiscount = 50
  return totalPrice - fixedDiscount
}

const cartItems = [
  { id: 1, name: "product1", price: 100 },
  { id: 2, name: "product2", price: 300 },
  { id: 3, name: "product3", price: 500 },
]

const totalFixedPercentageDiscount = calculateTotalPrice(
  cartItems,
  applyPercentageDiscount
)
const totalFixedPriceDiscount = calculateTotalPrice(
  cartItems,
  applyFixedDiscount
)

console.log(
  `Total amount to be paid after applying Percentge discount = ${totalFixedPercentageDiscount}`
)
console.log(
  `Total amount to be paid after applying Fixed discount = ${totalFixedPriceDiscount}`
)
