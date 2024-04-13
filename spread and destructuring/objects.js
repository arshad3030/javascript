// Object destructuring

const personeOne = {
  name: "Arshad",
  age: 26,
  address: {
    city: "Bangalore",
    state: "Karanataka",
  },
};
const personTwo = {
  name: "Chris",
  age: 37,
  address: {
    city: "New York",
    state: "USA",
    phonenumber: 686461616,
  },
};

// // we have to use same name as key name or we get undefined
// const { fname, agee } = personeOne;
// console.log(fname, agee);

// If we want to use any name , we can even use default values
// const { name: fname, age, favFood = "Pizza" } = personeOne;
// console.log(
//   `the first name is ${fname} and age is ${age} and favourite food is ${favFood}`
// );

// we can even use spread operator
const { name: fname, ...rest } = personTwo;

// while using  template literals js will impicitly convert object to string , hence it will result in displaying [object object]
// not the exact values , so we can use JSON.stringify() to make it readable

console.log(`name is ${fname} and rest details are ${JSON.stringify(rest)}`);
console.log(rest);

// we can even destructue nested objects
// const {
//   name,
//   address: { city },
// } = personTwo;
// console.log(name, city);

// we can even combine two objects , everything which is common is overridden by latest object
// const personThree = { ...personeOne, ...personTwo };
// console.log(` the new guy is ${JSON.stringify(personThree)}`);

// The most useful thing of object destructuring is using it in functions
// this is working fine
// function printUser(user) {
//   console.log(`the name of user is ${user.name} and age is ${user.age}`);
// }
// printUser(personeOne);

// But since we are using only name and age properties , we can destructure our parameters , we can also set default
function printUser({ name, age, favFood = "Pizza" }) {
  console.log(
    `the name of user is ${name} and age is ${age} and his fav food might be ${favFood}`
  );
}
printUser(personeOne);

// This is very heavily used in react
