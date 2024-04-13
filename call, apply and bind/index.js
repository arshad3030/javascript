let name = {
  fname: "Arshad",
  lname: "Anees",
  //this points to the current object which is name
  printfullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};
//invoking method inside our object
// name.printfullName();

// suppose we have another object
let name2 = {
  fname: "Chris",
  lname: "Hemsworth",
  // it is not a good idea to have same functionality again included , it will bve code duplication
};
// hence every method of js has a special function called call ,
// the first argument of call is refrence(or what our this should be poitnting to , in our case in should be pointing to name2 object)

// this is called function borrowing , borrwing function from other methods
// name.printfullName.call(name2);

// Instead what we do in real world scenario is, we keep our method outside and can be borrowed by any object
let Name = {
  fname: "Arshad",
  lname: "Anees",
};
let Name2 = {
  fname: "Chris",
  lname: "Hemsworth",
};

let printfullName = function () {
  console.log(this.fname + " " + this.lname);
};
// printfullName.call(Name);
// printfullName.call(Name2);

//  if we want extra parameter we can add
let printfullNames = function (hometown) {
  console.log(this.fname + " " + this.lname + " from " + hometown);
};
printfullNames.call(Name2, "New York");

// iif we wanna give multiple argumets we can't just give comma and so on
// instead we have apply, the only difference from call is it will allow us to pass multiple argument in form of array list

let print = function (hometown, state, number) {
  console.log(
    this.fname +
      " " +
      this.lname +
      " from " +
      hometown +
      " state is " +
      state +
      " number is " +
      number
  );
};
// print.apply(Name, ["new york", "gujarat", 9448611]);

// difference b/ bind and call is
// bind will create a copy of the method(exact same), returns that new function and we can invoke it later if we want
// call will directly call the method , it won't return anything

let nm1 = {
  fname: "Arshad",
  lname: "Anees",
};
let nm2 = {
  fname: "Chris",
  lname: "Hemsworth",
};

let printname = function (city) {
  console.log(this.fname + " " + this.lname + " from " + city);
};

let copiedfunc = printname.bind(nm1, "bangalore");
// so this function copied returns a copy of new function , which can be invoked to get the values(properties)
console.log(copiedfunc);
copiedfunc();
