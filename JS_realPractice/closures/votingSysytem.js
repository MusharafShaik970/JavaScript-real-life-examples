function votingSystem() {
  let voteCountOfA = 0
  let voteCountOfB = 0
  function voteForA() {
    voteCountOfA++
    console.log("your vote is successful for A")
    return voteCountOfA
  }
  function voteForB() {
    voteCountOfB++
    console.log("your vote is successful for B")
    return voteCountOfB
  }
  return {
    voteForA,
    voteForB,
  }
}
const voteSystem = votingSystem()
console.log(voteSystem.voteForA())
console.log(voteSystem.voteForA())
console.log(voteSystem.voteForB())
console.log(voteSystem.voteForB())

//here , we are not using  return before functions as if we use it before functions , then at first function i.e  voteForA it will exit out the main function without bothering about the next function.
//so , here we are using object to return the functions and dont forget to use comma between the returning values.
