// a function which is passed as an argument to other function is callback function
// since we know js is a synchronous single threaded language
// callback function allows us to use asynchronous operations in js, with the help of settimeout
// lets see
// now we are passing greet function inside function y
// it is now the responsibility of y when to call that function
function y(x) {
  console.log("printing first");
  x();
}

function greet() {
  console.log("hey I'm callback");
}
y(greet);
