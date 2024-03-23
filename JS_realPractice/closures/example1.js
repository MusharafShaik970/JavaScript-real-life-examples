function x() {
  var x = 1
  return function y() {
    console.log(x)
  }
  //instead writing return before function y() you can just write "return y" in place of this line , the code will be same
}
let z = x()
console.log(z) //this will print function y on console
