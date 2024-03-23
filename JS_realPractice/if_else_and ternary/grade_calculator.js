/*You are tasked with creating a program to calculate the final grade of a student based on their scores in three exams and their attendance.

The final grade is determined as follows:

The student's average exam score (out of 100) contributes 70% to the final grade.
The student's attendance percentage contributes 30% to the final grade.
Write a program that takes the following inputs:

Scores of three exams (out of 100)
Attendance percentage (out of 100)
The program should output the final grade of the student, rounded to the nearest whole number.

Your program should cover the following concepts:

If-else statements
Ternary operator (conditional expression)
Short-circuiting (optional, can be used to optimize the program)*/

let subject1Marks = parseInt(
  prompt("Enter the marks in first subject out of 100 in numbers")
)
let subject2Marks = parseInt(
  prompt("Enter the marks in second subject out of 100 in numbers")
)
let subject3Marks = parseInt(
  prompt("Enter the marks in third subject out of 100 in numbers")
)
let totalMarks = subject1Marks + subject2Marks + subject3Marks
let averageMarks = totalMarks / 3
let studentsAttendance = parseInt(
  prompt(
    "Enter students attendance in percentage out of 100, give input in number "
  )
)
//prompt takes input in terms of strings, to convert string to number we use parseInt
let gradeMarks = Math.floor(0.7 * totalMarks + 0.3 * studentsAttendance)
studentsAttendance < 50
  ? console.log("The student is detained")
  : console.log("The student is promoted")
switch (true) {
  case gradeMarks > 90:
    grade = "O"
    break
  case gradeMarks > 80:
    grade = "A+"
    break
  case gradeMarks > 70:
    grade = "A"
    break
  case gradeMarks > 60:
    grade = "B+"
    break
  case gradeMarks > 50:
    grade = "B"
    break
  default:
    grade = "fail"
}
console.log(`The total grade of the student is  ${grade}`)
