//setTimeout
// whenevver js encounters asynchrnous functions like settimeout
// it will first registers the call back function somewhere else with a timer pf 5 secnds
// then i twill continue it's remaining tasks or lines of code until the timer expires
// once the timer expires it will run this callback function to execute , that's how
// call back functions can be used to perform asynchronous operations
const timeoutId = setTimeout(() => {
  console.log("hey this is timeout function");
}, 5000);
clearTimeout(timeoutId);

// setInterval
const intervalId = setInterval(() => {
  console.log("i just keep printing every 2 seconds");
}, 2000);
clearInterval(intervalId);

//If we want to print just for five time
let count = 0;
const interval2 = setInterval(() => {
  console.log("printing for just 5 times");
  count++;
  if (count === 5) {
    clearInterval(interval2);
  }
}, 2000);
// clearInterval(interval2);
