console.time("MyTimer")
const startTime = new Date().getTime()
let endTime = startTime
while (endTime < startTime + 10000) {
  endTime = new Date().getTime()
} //here , the result will be displayed after 10 seconds. and Mytimer prints the execution time of the code
console.log(endTime)
console.timeEnd("MyTimer")

//Here , I tried to stop our code (which is after while loop) from executing for 10 sec .
//This method is known as "Blocking of Main Thread"

//There are still so many methods of console , to know what are they just enter console in browsers console tab
