const student = {
  name: "Arshad",
  roll: 12,
  gender: "male",
};
//Objects are mutable
student.roll = 16;

//Add properties
student.country = "India";

//Delete property
delete student.gender;

//Copy by reference -- > any change in one object changes its' refereed object
student2 = student;
student2.roll = 90;
console.log(student);

// Access array inside object
var std = {
  name: "chris",
  roll: 78,
  fruits: ["banana", "apple", "strawberry"],
};
console.log(std.fruits);

// Iterate over an Object
for (var key in std) {
  //   console.log(typeof key);
  //  since the keys are rreturned as string we makes use of [] notation to access
  console.log("the key name is " + key);
  console.log("the values is " + std[key]);
  // console.log(typeof std[key]);
}

// 1. Using Object.keys --> we get array of keys
// console.log(Object.keys(std));
keys = Object.keys(std);
keys.forEach((item) => console.log("using for each " + std[item]));

// or we can also do normal for loop--> the reason why we give student[keys[i]] is because
// for each will loop over each element in array , whereas for loops will lopp over index mnot the exact value

for (let i = 0; i <= keys.length - 1; i++) {
  console.log("for loops functionality " + std[keys[i]]);
}

// 2. Object.entries we get array of each property (the structure is [[property1],[p2],[p3].....])

function entry() {
  let ent = Object.entries(std);
  // console.log(Object.entries(std));
  // Using for of to get values directly
  for (let value of ent) {
    // 0 index will give all the keys
    console.log("keys " + value[0]);
    // console.log(typeof value);
    // 1 index will give all the values
    console.log("Values " + value[1]);
  }
}
// entry();

// 3. In object.values we get array of values
function values() {
  //   console.log(Object.values(std));
  let val = Object.values(std);
  val.forEach((item) => console.log(item));
}
// values();
