/* Push and Pop:
Write a program that initializes an empty array representing a stack. Implement a function pushToStack that adds an element to the top of the stack using the push method, and another function popFromStack that removes and returns the top element from the stack using the pop method.*/
let array = []
const pushToStack = (element) => {
  array.push(element)
  console.log(array)
}
const popFromStack = () => {
  console.log(`The popped element is ${array[array.length - 1]}`)
  array.pop()
  console.log(array)
}
pushToStack(2)
popFromStack()

//pushing multiples elements at a time
const pushMultipleElements = (...x) => {
  for (let item of x) {
    array.push(item)
  }
  console.log(array)
}
pushMultipleElements(1, 2, 3, 4, 5)

/* Indexof:
Write a program that initializes an array of numbers. Implement a function findIndex that takes a number as an argument and returns the index of the first occurrence of that number in the array using the indexOf method. If the number is not found, return -1.*/
let array1 = ["musharaf", 20, "goodBoy"]
const findIndex = (num) => {
  return array1.indexOf(num)
}
console.log(findIndex("goodBoy"))

/* Slice:
Write a program that initializes an array of strings representing a list of items. Implement a function getSublist that takes two parameters start and end, and returns a new array containing the sublist of items from index start (inclusive) to index end (exclusive) using the slice method*/

let items = ["apple", "ball", "cat", "dog", "elephant", "fan", "gun"]
function getSublist(start, end) {
  return items.slice(start, end)
}
console.log(getSublist(2, 5))
