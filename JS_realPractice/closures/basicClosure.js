function x() {
  var x = 1
  function y() {
    console.log(x)
  }
  y()
}
x()
//this is a closure
