/*Define a function named calculateBill that takes the following parameters:

mealCost: The cost of the meal (required).
taxRate: The tax rate as a percentage (default parameter with a default value of 8%).
tipRate: The tip rate as a percentage (default parameter with a default value of 15%).
discount: Any discount applied to the bill as a percentage (default parameter with a default value of 0%).
Inside the calculateBill function:

Calculate the total cost of the meal including tax and tip.
Apply any discount to the total cost if provided.
Return the total bill amount.
Define an arrow function named applyDiscount that takes the following parameters:

billAmount: The total bill amount after tax and tip.
discount: Any discount applied to the bill as a percentage.
Inside the applyDiscount function:

Calculate the discounted bill amount after applying the discount.
Return the discounted bill amount.
Define a function named printReceipt that takes a single parameter:

billAmount: The total bill amount to be printed.
Inside the printReceipt function:

Print a receipt including the original bill amount and the discounted bill amount (if a discount is applied).
Call the calculateBill function with appropriate values for the meal cost, tax rate, tip rate, and discount.

Pass the applyDiscount arrow function as an argument to calculateBill to handle the discount calculation.
Pass the printReceipt function as an argument to calculateBill to print the receipt.
Now, attempt to solve this problem and let me know if you need assistance or if you'd like me to check your solution! */
const calculateBill = (
  mealCost,
  discount = 0,
  taxRate = 0.08 * mealCost,
  tipRate = 0.15 * mealCost
) => {
  let totalBillAmount = mealCost + taxRate + tipRate
  let discountBillAmount = totalBillAmount - totalBillAmount * (discount / 100)
  const printReciept = (totalBillAmount) => {
    if (discount) {
      console.log(`The total bill amount is ${totalBillAmount}`)
      console.log(`The discounted billAmount is ${discountBillAmount}`)
    } else {
      console.log(`The total bill amount is ${totalBillAmount}`)
    }
  }
  printReciept(totalBillAmount)
}
calculateBill(100, 2)
