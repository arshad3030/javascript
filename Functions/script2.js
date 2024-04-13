function sayHello() {
  console.log("hi how are you?");
}

function greet(param) {
  param(); //Invoking the function which we expect to get
  function doSomething() {
    console.log("Doing Something!!!!");
  }
  return doSomething; // since dosomething is defined inside the scope of greet we can't access it outside hence we have to return it and then acess
}

greet(sayHello);

// let res = greet(sayHello);
// res();

// now greet function will return but it is not stored anywhere hence we need to store in some variable,
// then invoke the function with the variable name(which is also a function)
