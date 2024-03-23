// Let's consider a real-life example where you have a restaurant application. In this application, you want to implement a feature where customers can place their orders asynchronously. When the order is successfully placed, you want to notify the customer with a confirmation message

function placeOrder(orderDetails, callback) {
  setTimeout(() => {
    const isOrderPlaced = Math.random() > 0.5
    if (isOrderPlaced) {
      callback("your Order is successfully placed", null)
    } else {
      callback(null, "Error : you found error.")
    }
  }, 2000)
}

function orderCallback(message, error) {
  if (message) {
    console.log(message)
  } else {
    console.error(error)
  }
}

console.log("Placing your Order.......")
placeOrder({ item: "biryani", no: 3 }, orderCallback)
