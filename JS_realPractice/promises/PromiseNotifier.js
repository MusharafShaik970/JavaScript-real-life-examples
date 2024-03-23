function makePromise(promiseName, promiseTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(promiseName)
    }, promiseTime)
  })
}

function notifyUser(message) {
  console.log(message)
}
makePromise("wada", 3000).then(() => {
  notifyUser("Wada Mukammal kia.")
})
