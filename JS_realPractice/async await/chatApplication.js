const server = {
  users: {
    user1: { password: "password1", authToken: "Token1" },
    user2: { password: "password2", authToken: "Token2" },
  },
  messages: [],
}

function authenticateUser(userName, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        server.users[userName] &&
        server.users[userName].password === password
      ) {
        resolve(server.users[userName].authToken)
      } else {
        reject("User Authentication Failed")
      }
    }, 3000)
  })
}

function sendMessage(message, authToken) {
  return new Promise((resolve, reject) => {
    if (authToken) {
      server.messages.push({ message, authToken })
      resolve("Message sent Successfully")
    } else {
      reject("Authentication Token is Missing")
    }
  })
}

const user = "user2"
const passwords = "password2"
const messages = "Assalamu alaikum"
const e = new Error("Errror Occured")

async function chatApplication(userName, password, message) {
  try {
    const authToken = await authenticateUser(userName, password)
    console.log("User Authenticated .\n Authentication Token is  " + authToken)
    const result = await sendMessage(authToken, message)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

chatApplication(user, passwords, messages)

//If you want to use setTimeout , always use it inside promise , if you try to wrap promise inside setTimeout , incase of await it will return you Undefined.

//.then() , promise accepts function within them.
