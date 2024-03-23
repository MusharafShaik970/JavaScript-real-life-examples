//build a real time message sending application

//creating Dummy server:
const server = {
  users: {
    user1: { password: "password1", authToken: "token1" },
    user2: { password: "password2", authToken: "token2" },
  },
  messages: [],
}

//authenticating User
function authenticateUser(userName, password) {
  return new Promise((resolve, reject) => {
    if (
      server.users[userName] &&
      server.users[userName].password === password
    ) {
      resolve(server.users[userName].authToken)
    } else {
      reject("Invalid User")
    }
  })
}

//sending Message
function sendMessage(message, authToken) {
  return new Promise((resolve, reject) => {
    if (authToken) {
      server.messages.push({ message, authToken })
      resolve("Message sent Successfully")
    } else {
      reject("Authentication token is Missing")
    }
  })
}

const user = "user1"
const password = "password1"
const message = "Assalamu alaikum"
const e = new Error("Failed to Identify User")
authenticateUser(user, password)
  .then((authToken) => {
    console.log("User Authenticated.\n Authentication token is " + authToken)
    return sendMessage(message, authToken)
  })
  .then((authToken) => {
    console.log("Message Sent successFully")
  })
  .catch((e) => {
    console.log(e)
  })
