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
// function printMe() {
//   console.log("printing debounced message");
// }
// printMe = debounce(printMe); //create this debounce function for a)

// function debounce(func) {
//    let timeout;
//    return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, 1000)
//    }
//   }

// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after  1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

//b
// function printMe() {
//   console.log("printing debounced message");
// }
// printMe = debounce(printMe); //create this debounce function for a)

// function debounce(func, ms) {
//   let timeout;
//   return function() {
//    clearTimeout(timeout);
//    timeout = setTimeout(func, ms)
//   }
//  }
// let printMeX = debounce(printMe, 2000)

// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after  1000ms of no calls
// setTimeout(printMeX, 100);
// setTimeout(printMeX, 200);
// setTimeout(printMeX, 300);

//c
// function printMe(msg) {
//   // let msg = "";
//   console.log("Printing debounced message:", msg);
// }
// printMe = debounce(printMe, 1000);

// function debounce(func, ms) {
//   let timeout;
//   return function () {
//     const args = arguments
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//     func.apply(this, args);
//   }, ms);
//   };
// }

// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after  1000ms of no calls
// setTimeout(() => printMe("First message"), 100);
// setTimeout(() => printMe("Second message"), 200);
// setTimeout(() => printMe("Third message"), 300);

//Q4
// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the  sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in  the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many  numbers to print before stopping.

//a

// function printFibonacci() {
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// const interval = setInterval(() => {
//     const c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//     }, 1000);
// }

// printFibonacci()

//b

// function printFibonacciTimeouts() {
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// setTimeout(function fibonacci() {
//     const c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//     setTimeout(fibonacci, 1000);
// }, 1000);
// }

// printFibonacciTimeouts()

//C

// function printFibonacci(limit) {
//   let a = 0;
//   let b = 1;
//   console.log(a);
//   console.log(b);
//   let count = 2;

//   const interval = setInterval(() => {
//     const c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//     count++;

//     if (count > limit) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// printFibonacci(10);

//Q5
// 5. The following car object has several properties and a method which uses them to print a  description. When calling the function normally this works as expected, but using it from  within setTimeout fails. Why?
// let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {
// console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails
// a) Fix the setTimeout call by wrapping the call to car.description() inside a  function
// b) Change the year for the car by creating a clone of the original and overriding it c) Does the delayed description() call use the original values or the new values from  b)? Why?
// d) Use bind to fix the description method so that it can be called from within  setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that  setTimeout still uses the bound value from d)

//A

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
//     };
//     car.description(); //works
//     setTimeout(() => {
//         car.description();
//      }, 200); //fails

//b

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
//     };
//     let car2 = car;
//     car2.year = 2023;
//     car.description(); //works
//     setTimeout(() => {
//         car.description();
//      }, 200); //fails

//C
// The delayed description() still uses original values from "car", new values only apply to cloned car2. The rest of the values are referencing original car object.

//D

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
//     };
//     let car2 = car;
//     car2.year = 2023;
//     car.description(); //works
//     setTimeout(car.description.bind(car), 200);

//E

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
//     };
//     let car2 = {car};
//     car2.year = 2023;
//     let car3= {car};
//     car3.model = "Taycan";
//     car.description(); //works
//     setTimeout(car.description.bind(car), 200);

// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can  be used to delay the call to that function by ms milliseconds.
// function multiply(a, b) {
// console.log( a * b );
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all  delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of  parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your  delay prototype function still works.

//A

// Function.prototype.delay = function(ms) {
//     let fn = this;
//     return function(...args) {
//       setTimeout(() => fn.apply(this, args), ms);
//     };
//   };

// function multiply(a, b) {
//     console.log( a * b );
//     }
//     multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//B
// Function.prototype.delay = function(ms) {
//     let fn = this;
//     return function(...args) {
//       setTimeout(() => fn.apply(this, args), ms);
//     };
//   };

// function multiply(a, b) {
//     console.log( a * b );
//     }
//     multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//C

// Function.prototype.delay = function(ms) {
//     let fn = this;
//     return function(...args) {
//       setTimeout(() => fn.apply(this, args), ms);
//     };
//   };
// function multiply (a, b, c, d) {
//     console.log(a * b * c * d)
// }
// multiply.delay(500)(2, 3, 4, 5)  // prints 120 after 500 milliseconds

// 7. In JavaScript, the toString method is used to convert an object to a string representation.  By default, when an object is converted to a String, it returns a string that looks something  like [object Object].
// However, we can define our own toString methods for custom objects to provide a more  meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print  their details
// b) Test your method by creating 2 different people using the below constructor function  and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and  add an extra property cohort
// d) Add a custom toString for Student objects that formats and prints their details. Test  with 2 students.
// function Person(name, age, gender) {
// this.name = name;
// this.age = age;
// this.gender = gender;
// }
// const person1 = new Person('James Brown', 73, 'male')
// console.log('person1: '+person1) //prints person1: [object Object]

//a
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     this,toString = function() {
//         return "${this.name} (${this.age}, ${this.gender})"
//     }
// }

//b
// const person1 = new Person("Keegan Greig", 22, "Male");
// console.log(person1.toString());

// const person2 = new Person("Charlotte Christie", 22, "Female");
// console.log(person2.toString());

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     this.toString = function() {
//       return `${this.name} (${this.age}, ${this.gender}), ${this.cohort})`;
//     }
//   }

// //c

// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;
//   }

// //D

// const student1 = new Student('Keegan Greig', 22, 'Male', 'SE2023');
// console.log(student1.toString());

// const student2 = new Student('Charlotte', 22, 'Female', 'SE2023');
// console.log(student2.toString());

//Q8
// 8. The following DigitalClock class uses an interval to print the time every second once  started, until stopped.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the  parameter precision – the number of ms between 'ticks'. This precision parameter  should default to 1 second if not supplied.
// b) Create a new class AlarmClock that inherits from DigitalClock and adds the  parameter wakeupTime in the format hh:mm. When the clock reaches this time, it  should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should  default to 07:00 if not supplied.

//A
// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);
//     }
// }

// //B
// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeupTime = "07:00") {
//     super(prefix);
//     this.wakeupTime = wakeupTime;
//   }

//   display() {
//     let date = new Date();
//     let [hours, mins] = [date.getHours(), date.getMinutes()];
//     if (hours < 10) hours = "0" + hours;
//     if (mins < 10) mins = "0" + mins;
//     console.log(`${this.prefix} ${hours}:${mins}`);
//     if (`${hours}:${mins}` === this.wakeupTime) {
//       console.log("Wake Up");
//       this.stop();
//     }
//   }
// }
// const myAlarmClock = new AlarmClock('my alarm clock:', '20:37');
// myAlarmClock.start();