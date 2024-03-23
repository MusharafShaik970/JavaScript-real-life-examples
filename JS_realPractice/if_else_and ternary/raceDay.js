/*Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.*/
let raceNumber = Math.floor(Math.random() * 1000)
const registeredEarly = true
const runnersAge = 15
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000
}
if (runnersAge > 18 && !registeredEarly) {
  console.log(`your Race Number is ${raceNumber} and you will race at 9:30`)
} else if (runnersAge > 18 && registeredEarly) {
  console.log(`your Race Number is ${raceNumber} and you will race at 11:00am`)
} else if (runnersAge < 18) {
  console.log(`your Race Number is ${raceNumber} and you will race at 12:30pm`)
} else {
  console.log("please check your registrarion desk")
}
