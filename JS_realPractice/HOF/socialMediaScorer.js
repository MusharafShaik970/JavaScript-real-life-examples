/*You are given with data:
const userEngagementData = [
  { id: 1, likes: 10, comments: 5, shares: 2 },
  { id: 2, likes: 20, comments: 8, shares: 4 },
  { id: 3, likes: 15, comments: 10, shares: 3 }
];
Your task is :
1) calculate the total engagement score of each persin using formula : engagementscore = (likes*comments)+shares
2)calculate total engagement score of all users along with number of users
Hint: use Map and Reduce Functions and 
      function generateEngagementReport(data, calculateFunction, formatFunction) {)
*/

function generateEngagementReport(data, calculateFunction, formatFunction) {
  const engagementScore = data.map(calculateFunction)
  const totalEngagementScore = engagementScore.reduce((a, b) => {
    return a + b
  }, 0)
  return formatFunction(totalEngagementScore, data)
}

function calculateEngagementscore(item) {
  return item.likes * item.comments + item.shares
}

function calculateFormatFunction(totalEngagementScore, data) {
  return `The total Engagement Score of all Users is ${totalEngagementScore} and Number of Users are ${data.length}`
}

const userEngagementData = [
  { id: 1, likes: 10, comments: 5, shares: 2 },
  { id: 2, likes: 20, comments: 8, shares: 4 },
  { id: 3, likes: 15, comments: 10, shares: 3 },
]

const engagementReport = generateEngagementReport(
  userEngagementData,
  calculateEngagementscore,
  calculateFormatFunction
)
console.log("Generated Engagement Report:")
console.log(engagementReport)

//this problem acan be simply solved as :
const engagementScore1 =
  userEngagementData[0].likes * userEngagementData[0].comments +
  userEngagementData[0].shares

const engagementScore2 =
  userEngagementData[1].likes * userEngagementData[1].comments +
  userEngagementData[1].shares

const engagementScore3 =
  userEngagementData[2].likes * userEngagementData[2].comments +
  userEngagementData[2].shares

const EngagementScoreTotal =
  engagementScore1 + engagementScore2 + engagementScore3
console.log(
  `The total Engagement Score of all Users is ${EngagementScoreTotal} and Number of Users are ${userEngagementData.length}`
)
//using this method the result is same ,but it is not good code , it is not modular , it is nor reusable , it is not functional .It violates DRY principle.
//Always write Functional code , i.e try to solve problems using callbacks , HOF functions.
