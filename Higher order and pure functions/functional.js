//Interview question
// this is functional programming , instead of creating multipe functions whith same logic repeated in all functions
// we can extract the logic and create sepearte functions
//pass that ;logic as argument to our main function whose job is to iterate and give us the output
//her calculate is the higher order function , and other functions are call back functions
// it increases readabality , modularity , reusable
const radius = [3, 4, 7, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

//this is the same implementation as calculate , this is how map works
// so we have written our own implementation of map as calculate
console.log(radius.map(area));

// to make our calculate function exactly as map
//this referes to radius , it refers to the object which invoked this functions
// it is called polyfill for map
Array.prototype.calc = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log(radius.calc(area));
