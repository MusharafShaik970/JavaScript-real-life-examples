// Let's consider a real-life example where you're building a messaging application. In this application, you want to implement a feature that sends a notification to a user when they receive a new message. To achieve this, you'll use callbacks to handle the notification process asynchronously.

function recieveMessage(message, callback) {
  setTimeout(() => {
    callback(message)
  }, 2000)
}

function handleMessage(message) {
  console.log(message)
}
console.log("loading your message.....")
recieveMessage("Assalamu alaikum ya Akhi", handleMessage)
