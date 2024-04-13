// When we are using axios and fetch , it is very useful if we getting the url from the oustide function in our inner function
// the inner arrow function have access to url variable , even though fetch is gonna call .then long after outer fnc is called

// Due to lexical scoping rules , we can get values of x that is variable a inside all it's child functions
// function x() {
//   var a = 20;
//   function y() {
//     var b = 30;
//     console.log(a);
//   }
//   function z() {
//     console.log(a);
//   }
//   y();
//   z();
// }
// x();

// console.log(x()); // we will gte 20 and undefined , becaus ewe are not returning anything hence undefined

// the function x is completed after we invoke and executed so it's variables should
// not be accessible , but still y somehow is keeping track of a even after x is finished

// JavaScript, closures allow inner functions to retain access to the variables and parameters of their outer (enclosing)
// functions even after those outer functions have finished executing.
// This behavior is because the inner function maintains a reference to the scope chain of the outer function where it was defined.(this
// is possible becaue of lexical scoping)

// lexical scoping allows inner functions to "remember"
// and access variables from their outer scopes, even if those outer scopes have finished executing.

// lexical scoping means that the scope of a variable is determined by its location in the source code,
// at the time when the code is written, rather than where it is called or executed.

function x() {
  var a = 20;
  function y() {
    var b = 30;
    console.log(a);
  }
  return y;
}
// console.log(x()); // we will get function y
// in order to get value of y
let z = x();
z();

// or we can do

// x()()
