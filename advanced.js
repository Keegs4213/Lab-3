// makeCounter below is a decorator function which creates and returns a function that  increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if  it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the  counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how  much each call to counter() should increase the counter value by.
// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }
// let counter1 = makeCounter();

//a
// let counter2 = makeCounter();

// counter1(); // 1
// counter1(); // 2

// counter2(); // 1 - Counter 2 is independent from counter 1
//b
// function makeCounter(startFrom) {
//     let currentCount = startFrom || 0;
//     return function () {
//       currentCount++;
//       console.log(currentCount);
//       return currentCount;
//     };
//   }
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   let counter3 = makeCounter(9);

//   counter3(); // 10

//c
//   function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom || 0;
//     return function () {
//       currentCount += incrementBy;
//       console.log(currentCount);
//       return currentCount;
//     };
//   }
//   let counter= makeCounter(20, 5);

//   counter(); // 25
//   counter(); // 30

//Q2
// The following delayMsg function is intended to be used to delay printing a message until  some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds) d) Use clearTimeout to prevent the fifth test from printing at all.
// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// A - #4 Will print first, there is no delay set so gets highest priority. #3 prints next, it has been set with a delay of 0,
// so prints after the test without delay. #2 Prints next as there is delay of 20ms, #1 prints last due to 100ms delay

//B
// const delayMsg = (msg) => {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

//C
// const delayMsg = (msg) => {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// setTimeout(delayMsg, 10000, "#5 Delayed by 10s")
// delayMsg('#4: Not delayed at all')

//Q3
// 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,  similar requests until there's a brief pause, then only executing the most recent of those  requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server  requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and  suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second  pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the  length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument  msg which is included in the console.log statement.
// function printMe() {
// console.log('printing debounced message')
// }
// printMe = debounce(printMe); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after  1000ms of no calls
// setTimeout( printMe, 100);
// setTimeout( printMe, 200);
// setTimeout( printMe, 300);

//a
function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe); //create this debounce function for a)
function debounce(func) {
   let timeout;
   return function() {
    clearTimeout(timeout);
    timer = set.Timeout
   }
}

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after  1000ms of no calls
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);
