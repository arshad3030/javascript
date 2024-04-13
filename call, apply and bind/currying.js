// Don't use this above bind example for curring in interview , use below one
// Currying enables you to create specialized functions from general-purpose ones by
// breaking down complex operations into smaller, reusable functions.
let multiply = function (x, y) {
  console.log(x * y);
};
// bind will create a copy of multiply , takes 2 as y and whatever we pass as this will be x
let multiplybyTwo = multiply.bind(this, 2);
//invoking
multiplybyTwo(3); // we can even pass our own arguments multiply.bind(this,4,5) it will ignore multiplyBythree(3)
let multiplybyThree = multiply.bind(5, 3);
multiplybyThree(3);
// function curry by making copy using bind , and we create more methods out of it by presetting some argument inside iy

// 2. one more way to do this is using function closure
// i find this on easy to do it
// what is currying?
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
// why it is used ?
// It makes a function pure which makes it expose to less errors
// It divides one function into multiple functions so that one handles one set of responsibility

// One simple example during interview transforming function f(a,b) to f(a)f(b) using closure

function f(a) {
  return function (b) {
    // if u try to return console of value qwe will get undefined , becaus ein this type of invocation
    // f(a) is invoked immediately and it return the inner function , but inner fnc does not return anything hence it returns undefined
    // console.log(a,b);
    // but we get this console because instanceof's just amessage which is printed after invoking f(a) getting 9  , then hey , and then
    // printing 0(which returns both the values) , so order of execution is , calls f(a) prints message , calles inner get both values then conole
    console.log("hey");
    return a, b;
    //  this is used for returning with string so we can concatenate in final console with sonme message
    // return ` ${a} ${b}`;
  };
}
console.log(f(9)(0));

let Multiply = function (x) {
  return function (y) {
    console.log("using closure for currying " + x * y);
  };
};
let Multiply_two = Multiply(2);
Multiply_two(3);

let Multiply_three = Multiply(3);
Multiply_three(3);

// Interview Question

// sum(2)(6)(1)
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// to explain this --> console.log(sum(2)) the console will have one function(new function) which will expect another parameter b
// similarly sum(2)(6) then go on
console.log(sum(2)(6)(1));

// Interview questin2
// evaluate sum , multiply , divide based on operation given
function evaluate(operation) {
  // similar to function(a) instead using callback
  return (a) => {
    return (b) => {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "subtract") return a - b;
      else return "No / Invalid Operation Selected";
    };
  };
}
// another use case is , storing the function in one variable and usie it multiple times and ways
const mul = evaluate("multiply");
console.log(mul(2)(3));
console.log(mul(6)(5));

// interview QSn 3
// Infinite Currying add(1)(2)(5)......(n)
function add(a) {
  return function (b) {
    // check if any values is present in b
    if (b) return add(a + b);
    // if not present returns a
    return a;
  };
}
// add(2)--> goes inside add , returns function , chcks if b is not there returns 2
// add(2)(4)(8) --> goes inside add , returns functtion b is present , calls add(2+4 =6), runs again with b value as 8 ,
// present returns add(6+8=14) now value of a is 14 , runs again b i not present returns a =14;
console.log(add(2)(4)(8)());

// Interview question -- diff b/w curry and partial application
// In curry fnc  , the number of inner function depends on number of arguments it receives always
// this is not a curried function , it's partial application --> transfor a function into another function with small no of arguments
function fn1(a) {
  return function (b, c) {
    return a + b + c;
  };
}
console.log(fn1(2)(1, 1));

// Advance interview question - for senior level
function curry(func) {
  return function curriedfunction(...args) {
    // we are doing check so that it means all arguments required by the original function(addition) have been provided or not
    if (args.length >= func.length) {
      // then it returns the function addition , which returns the sum of these 4
      return func(...args);
    }
    return function (...next) {
      //since condition not met , it will return a new function (curriedfunction) which takes additional next arguments
      // it combines previous arguments with new arguments using spread operator
      return curriedfunction(...args, ...next);
    };
  };
}
// we are creating a function which will perform addition of four number , curring means num of inner fncs = num of arguments
const addition = (a, b, c, d) => a + b + c + d;
// now calling function with argument as another func
const totalSum = curry(addition);
//storing in variable and then invoking inner functions
console.log("impl " + totalSum(2)(4)(6)(8));
//for (2)--> it will go in returna function , which checks if 1 >= 4(function length is 4 since 4 argumenst provided)

// this above curriedfunction can be used for any task , problem not only addition and any number of arguments
