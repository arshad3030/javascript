let u1 = sayHello("Arshad");
let u2 = sayHello(12345);
console.log(u1, u2);

// Function Declaration
function sayHello(user) {
  //   console.log("Hello", user);
  return "cooldude" + user;
}
//Function Expression
// let u3 = add(1, 2);
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 4));

// Even though it is function declaration
// printDillion is hoisted, but it is only lifted to the top of the scope it was declared in. In this case,
//  it is declared in a local scope--in printHello.
// Therefore, it would only be accessible in the function.
// To fix this we have to invoke printDillion() inside printHello()

printHello();
// hello

printDillion();
// ReferenceError: printDillion is not defined

function printHello() {
  console.log("hello");

  function printDillion() {
    console.log("dillion");
  }
}
