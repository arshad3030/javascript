// IIFE= Immediately Invoked Function Expressions
// execute a function immediately after it's created , once executed it won't be executed again unless it's explicitly called

// 1. One of the main prupose of iife is to declare global variables na davoid ppolluting global namespace,

// 2.  we can define the global variables which we need inside this (managing becomes easy)
// Encapsulation -->  preventing them from polluting the global namespace
// Isolation--> Variables and functions declared inside an IIFE are inaccessible from outside the function

//  if we don't give gloabl the variables are accessible inside iife function only(this is how we declare private variables) , global is similar to window object.
//  variables declared without the var, let, or const are accessible from anywhere in your Node.js application
//  hence we can give explicitly global to say that thsi variable can be accessed annywhere in our Code

// here this is anonymous iife , we can also have named iife
(function () {
  a = 6;
  var var1 = "Hey";
  var var2 = "hello";
  global.var1 = var1;
  global.var2 = var2;
})();

//Note that we enclose our iife inside () , saying that it's function expression, also note we are not invoking this function explicitly anywhere

function display() {
  console.log(var1, a);
}
// display();

// Function Declaration vs Function Expression
// Function Declaration - a function with a a function name , these are hoisted and can be used before intialization
// Function expression - a function with no name but has to be asssigned to a variable or it gives error. cannot use before initialization , not hoisted , gives reference error

// function expression if we try to access function before intializing behaves just like variable, we will get undefined same as variable var,
//   because execution context , memory first fro variables and function default undefined , then code execution)

// Function declaration
function add(x) {
  console.log("function declaration " + x);
}
console.log(add(3));

// Function Expression - no name for function , just keyword function
let res = function expr(a) {
  return `Hey whatsup ${a}`;
};
//cannot use named function expression outside it's own function
// console.log(expr("koj"));
console.log(res("arshad"));
// function expression using arrow functions
let naming = (name) => {
  return `heya , ${name}. how u doin?`;
};
console.log(naming("arshad"));

// this is named function expression , although looks very similar to function declaration
// to identify  Function declarations start with the function keyword followed by the function name ,
// Named function expressions involve assigning a function to a variable or property using the function keyword
let summation = function named(a, b) {
  return a + b;
};
