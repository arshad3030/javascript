// Intrview questions
// js doesn't wait fgor anyone the settimeout is set aside , prints the rest of lines until the timer for settimeouut is finished
// we want to print 1 to 5 each ScriptProcessorNode, hence I*1 will be 1 sec , I*2000 will be 2 sec
// but this doesnt wortk because of closure
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      //this i is referring to same variable i , so first it finishes running 5 times value becomes 6 until timer for settimeout is finished
      //hence all 5 times this call back func runs it poitns to same variable i=6
      console.log(i);
    }, i * 1000);
  }
  console.log("prints this first");
}
// x();

// To fix this we can umake the variable as let , since it is block scope the inner i will always point to fresh new variable
// buut if we havve to do with var only then we need to create another function which will supply new value of i
function y() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
  console.log("prints this first");
}
y();
