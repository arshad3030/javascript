// Destructuring allows you to extract values from arrays or objects and assign them to variables

//The spread operator (...) allows an iterable (like an array or string) to be expanded into individual elements.
// spread operator can be used to concat array or objects, pass multiple values to function
// spread operator spread into individual components

let num1 = [1, 2, 3, 4];
// instead we want all elements in one array , not in nested array [[],...]
// let num2 = [[num1], 9, 8, 7];
let num2 = [...num1, 9, 8, 7];
console.log(num2);

let alphabets = ["A", "B", "C", "D", "E", "F"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

//We can even skip the variables we don't want
// const [a, , c, d] = alphabets;
// console.log(a);
// console.log(c);
// console.log(d);

// const [a, , c, ...rest] = alphabets;
// console.log(a);
// console.log(rest);

const newArr = [...alphabets, ...numbers];
console.log(newArr);

// return an array with sum and multiply seperately
function sumandmultiply(a, b) {
  // console.log(`a is ${a} and b is ${b} `);
  return [a + b, a * b];
}
//since numbers is string of characters for add it is concatenating (o/p is 12) and for multiply convert into number and multiply
// let res = sumandmultiply(...numbers);
// console.log("output is " + res);

// let res = sumandmultiply(2, 3);
// we can even destructure it
// console.log(res);

// We can even add a default value , by default it's no division but when our function also has division it will be added to this variable
let [add, mul, div = "no division"] = sumandmultiply(2, 3);
console.log(add, mul, div);
