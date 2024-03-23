/*question : You are given with list of activities in an array. you task is to find out 
1)total time spent on running
2) total time spent on activities above 200 calories.
Hint: Use filter and reduce HOF.
array is :
const activities = [
  { type: "running", duration: 30, calories: 300 },
  { type: "cycling", duration: 50, calories: 500 },
  { type: "running", duration: 20, calories: 200 },
  { type: "walking", duration: 30, calories: 150 },
]
*/
function calculateTotalDuration(activity, filterfunction) {
  const filteredActivities = activity.filter(filterfunction)
  const totalDurationTime = filteredActivities.reduce((a, b) => {
    return a + b.duration
  }, 0)
  return totalDurationTime
}

const filterByRunningActivity = function (activity) {
  return activity.type === "running"
}

const filterByCalorie = function (activity) {
  return activity.calories > 200
}

const activities = [
  { type: "running", duration: 30, calories: 300 },
  { type: "cycling", duration: 50, calories: 500 },
  { type: "running", duration: 20, calories: 200 },
  { type: "walking", duration: 30, calories: 150 },
]

const totalTimeDurationOnRunning = calculateTotalDuration(
  activities,
  filterByRunningActivity
)
const totalTimeDurationOnCalories = calculateTotalDuration(
  activities,
  filterByCalorie
)

console.log(
  `Total Time spent on running is ${totalTimeDurationOnRunning} minutes`
)
console.log(
  `Total Time spent on activities above 200 calories is  ${totalTimeDurationOnCalories} minutes`
)
