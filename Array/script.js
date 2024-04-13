// This is to sort array ,strings in some order

let arr = ["arshad", 2, "jim", -2, -6, 90];

arr.sort((a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b); // Strings compared alphabetically
  }
  if (typeof a === "number" && typeof b === "number") {
    return a - b; // Numbers compared numerically
  }
  return typeof a === "string" ? -1 : 1; // Strings come before numbers
});

console.log(arr); // Output: [2, "arshad"]

// This function will give us the position of found element

function toFindIndex() {
  let arr = [1, 4, 6, -9, 76, 65];
  let res = arr.findIndex((item) => item === 76);
  if (res === undefined) {
    console.log("item is not found at any position ");
  } else {
    console.log("item is found at position " + res);
  }
}

// toFindIndex();

// Filter based on some condition , return a new array of multiple values , if we give item < -2 , it will return empty array(if value not met)

function filtering() {
  let arr = [1, 4, 6, -9, 76, 65];
  let res = arr.filter((item) => item > 0);
  //You can't check res===[] directly , it will check for reference equality not for equality of contents
  // to check this we have to give res,length

  if (res.length === 0) {
    console.log("No item found");
  } else {
    console.log("items found are " + res);
  }
  console.log(typeof res);
}
// filtering();

// Foreach implementation
// we will get undefined for below , code
// because foreach does not return a value , instead it iterates over each itema and does some operation based on callback.
// hence we get undefined if we try to return something , instead we have to update our sum variable itself

// let array = [1, 4, 8, 9, 34, 56];
// let sum = 0;
// function foreachimpl() {
//   let res = array.forEach((item) => {
//     return sum + item;
//   });
//   console.log(res);
// }
// foreachimpl();

let array = [1, 4, 8, 9, 34, 56];
let sum = 0;
function foreachimpl() {
  array.forEach((item) => (sum = sum + item));
  console.log(sum);
}
// foreachimpl();

// Map implememtation
// Also please note we will get new array , aslo in all examples
// since there is single statement for our call back hence i'm not giving curly braces{}

function mapImpl() {
  let res = array.map((item) => item * 5);
  console.log("Multiplying each element by 5" + res);
  // console.log(Array.isArray(res));
}
// mapImpl();

// for of will give us index values
// for in will give us values of array
// let ar = [1, 4, 8, 9, 34, 56];
// for (let val of ar) {
//   console.log(val);
// }

// reduce function
// It reduces an array to single value
// takes 1 element and 2nd from array , add then take sum and add with 3rd
// used when we want only single value
function reducing() {
  let res = array.reduce((itm1, itm2) => {
    return itm1 + itm2;
  });
  console.log("using reduce we got single value --> " + res);
}
// reducing();

function reduc() {
  let res = array.forEach((itm1, itm2) => {
    // itm2 is considered as index hence [0+1][1+4][2+8]....
    console.log(
      "foreach won't return but just loops each item and changes it--> " +
        (itm1 + itm2)
    );
  });
}
reduc();
