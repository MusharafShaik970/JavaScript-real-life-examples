function fetchWeather(location, callback) {
  setTimeout(() => {
    const weatherData = {
      location: location,
      temperature: Math.floor(Math.random() * 30) + 1,
      condition: ["sunny", "cloudy", "rainy", "peaceful"][
        Math.floor(Math.random() * 4)
      ],
    }
    callback(null, weatherData)
  }, 3000)
}

const weatherCallback = (error, data) => {
  if (error) {
    console.log((Error = "error"))
  } else {
    console.log(`Weather of ${data.location} :`)
    console.log(`Temperature is ${data.temperature}C`)
    console.log(`weather condition is ${data.condition}.`)
  }
}

console.log("Fetching Weather condition........")
fetchWeather("hyderabad", weatherCallback)
