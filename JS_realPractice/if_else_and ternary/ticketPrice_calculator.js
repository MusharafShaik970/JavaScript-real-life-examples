/*Question :
You are tasked with creating a program to calculate the price of a movie ticket based on the age of the customer and whether they are a student or not. The ticket price is determined as follows:

If the customer is under 12 years old, the ticket price is $5.
If the customer is between 12 and 18 years old (inclusive) and is a student, the ticket price is $8.
If the customer is between 12 and 18 years old (inclusive) and is not a student, the ticket price is $10.
If the customer is over 18 years old and is a student, the ticket price is $12.
If the customer is over 18 years old and is not a student, the ticket price is $15.
Write a program that takes the age of the customer and whether they are a student or not as input, and outputs the price of the ticket.

Your program should cover the following concepts:

If-else statements
Else-if (elif) statements
Ternary operator (conditional expression)*/

let age = prompt("Enter your age in Numbers:")
let isStudent = prompt("enter true if you are a student or else enter false:")
isStudent = isStudent.toLowerCase() === "true"
//we used this to convert input given in lowercase. as real booleans are in lowercase. for example , if i enter FALSE or TRUE
//the output will be wrrong if idont write thatline of code.
//also note prompt only works in browsers console not in vs code
let ticketPrice
if (age < 12) {
  ticketPrice = 5
} else if (age >= 12 && age <= 18) {
  ticketPrice = isStudent ? 8 : 10
} else {
  ticketPrice = isStudent ? 12 : 18
}
console.log(`Your Ticket price is $ ${ticketPrice}`)
