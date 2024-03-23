/*  Write a program that initializes an empty array. Implement a menu-driven program that allows the user to perform the following operations:

Add an element to the end of the array using push.
Remove the last element from the array using pop.
Remove the first element from the array using shift.
Add an element to the beginning of the array using unshift.
Find the index of a specific element in the array using indexOf.
Get a sublist of elements from the array using slice*/
let array = []
array.push("musharaf")
array.push(20)
console.log(array)
array.pop()
console.log(array)
array.shift()
console.log(array)
array.unshift("shaik", 19, "goodboy")
console.log(array)
console.log(array.indexOf(19))
console.log(array.slice(1, 2))
console.log(array)
