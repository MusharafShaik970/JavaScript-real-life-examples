// let string = prompt("Enter the string to count vowels in it");
let string = "musharaf"
let vowelCounter = (string) => {
  let count = 0
  for (const char of string) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++
    }
  }
  return count // Move the return statement outside the loop
}

console.log(vowelCounter(string))
