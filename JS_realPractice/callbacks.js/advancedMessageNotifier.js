// Let's enhance the messaging application example by adding the ability to handle multiple users and track the sender of the message. We'll also add the option to handle errors in case the message delivery fails.

//Problem:
// You are developing a messaging application that notifies users when they receive a new message. Implement a function called receiveMessage that takes four parameters: message (string), sender (string), recipient (string), and callback (function). This function should simulate the process of receiving a message, including tracking the sender and recipient, and then call the callback function with the received message details

// Here's your task:

// Define a function called receiveMessage that takes four parameters: message (string), sender (string), recipient (string), and callback (function).
// Inside receiveMessage, simulate the process of receiving a message by using setTimeout to delay the execution of code.
// After the delay, call the callback function with the received message details (message, sender, recipient).
// Implement error handling to check if the message delivery fails. If an error occurs, call the callback function with an error message.

function recieveMessage(message, sender, reciever, callback) {
  setTimeout(() => {
    const isMessageDeliverd = Math.random() > 0.3
    if (isMessageDeliverd) {
      callback(null, {
        message,
        sender,
        reciever,
      })
    } else {
      callback("The Message is not deliverd yet.", null)
    }
  }, 2000)
}

function handleMessage(error, messageDetails) {
  if (error) {
    console.log(error)
  } else {
    console.log(`Sender : ${messageDetails.sender}`)
    console.log(`Reciever : ${messageDetails.reciever}`)
    console.log(`Message : ${messageDetails.message}`)
  }
}

console.log("Information is loading......")
recieveMessage(
  "Assalamu alaikum ya Akhi",
  "Abdullah",
  "Musharaf",
  handleMessage
)
