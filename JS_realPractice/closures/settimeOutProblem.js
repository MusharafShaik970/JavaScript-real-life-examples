function x() {
  var i = 0
  function y() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i)
      }, i * 1000)
    }
  }
  y()
}
x()
//i want output as 1 2 3 4 5 in a manner that after printing one number it should one sec then ....
//the reason why JS is behaving like this here is based on 1) scope of var(global here) 2) closure remembers the reference of the variable not its value . so we know that setTimeOut takes its code somewhere else , executes there and brings back to execution context and callstack after its time is completed. before completion of time the JS engine runs code gets the correct values but at last when it is changed to 6 , as it points to reference it consoles 6.

// solution 1 = just replace var in for with let your problem is solved
//solution 2 = using closures
/* 


function x() {
  for (var i = 1; i <= 5; i++) {
    function close(z) {
      setTimeout(function () {
        console.log(z)
      }, z * 1000)
    }
    close(i)
  }
}
x()
*/
