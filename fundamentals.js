// // // Section 1 Q1

// console.log("" + 1 + 0) //"10"


// // //Q2
// "" - 1 + 0 = -1

// // //Q3
// true + false = 1


// // //Q4
// !true = false

// //Q5
// 6 / "3" = 2

// //Q6
// "2" * "3" = 6

// //Q7
// 4 + 5 + "px" = 9px

// //Q8
// "$" + 4 + 5 = $9

// //Q9
// "4" - 2 = 2

// //Q10
// "4px" - 2 = NaN

// //Q11
// " -9 " + 5 = " -9 5"

// //Q12
// " -9 " - 5 = -14

// //Q13
// null + 1 = 1

// //Q14
// undefined + 1 = NaN

// //Q15
// undefined == null = true

// //Q16
// undefined === null = false

// //Q17
// " \t \n" - 2 = -2

// //Section 2
// //Q1
// let three = "3"
// let four = "4"
// let thirty = "30"

// let addition = three + four
// let multiplication = three * four
// let division = three / four
// let subtraction = three - four

// let lessThan1 = three < four
// let lessThan2 = thirty < four
// // Addition is giving incorrect answer, the + operator is concatenating the strings "3" and "4" to give the answer "34".
// // We can fix this by converting the strings to numbers using .toNumber or starting with numbers when the variables are declared

// //Section 3
// if (0) console.log('#1 zero is true') //Will not print, 0 is not a truthy value.
// if ("0") console.log('#2 zero is true') // Will print because non-empty string is considered truthy value.
// if (null) console.log('null is true') // Will not print, null will not return true in a boolean
// if (-1) console.log('negative is true') // Will print, any non-zero number considered truthy value. In this case -1 is truthy
// if (1) console.log('positive is true') // Will print, number 1 is truthy value.

// //Section 4
// //Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 4, b = 7;
let result = `${a} + ${b} is `;

// (a + b < 10 ? 'less than 10' : 'greater than 10')
// console.log(result)
// // The "+=" is shorthand for concatenating a string from a string already defined. result += is result = result +

// //Section 5
// // Rewrite the following function using: a) function expression syntax, and b) arrow function  syntax. Test each version to make sure they work the same.
// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

// // a function expression syntax
// const getGreeting = function(name) {
//     return "hello" + name + "!";
// }

// b arrow function syntax
const getGreeting = (name) => "Hello" + name + "!"; //arrow functions doesnt use the reserved keyword 'function'


// // Section 6
    const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }

const inigo = {
    firstName : "Inigo",
    lastName: "Montoya",
    greeting(person) {
        let greeting = `Hello ${person.name} ${this.lastName}, my name is ${this.firstName}.`; //dont forget the template literals
        console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase: (person) => person.numFingers === 6 ? "My name is Inigo Montoya. You killed my father. Prepare to die" :  'Nice to meet you.' //forgot to add 6 to your

    }

inigo.greeting(westley);
inigo.greeting(rugen);


// //Section 7
const basketballGame = {
    score: 0,
    freeThrow() {
      this.score++;
      return this;
    },
    basket() {
      this.score += 2;
      return this;
    },
    threePointer() {
      this.score += 3;
      return this;
    },
    halfTime() {
      console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls.`);
      return this;
    },
    fullTime() {
      console.log(`Full time score is ${this.score}, with ${this.fouls} fouls.`);
      return this;
    },
    fouls: 0,
    addFoul() {
      this.fouls++;
      return this;
    }
  };
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


// Question 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
const auckland = {
    name: "Auckland",
    population: 1_657_000,
    state: "AKL",
    founded: "1840",
    timezone: "New Zealand Daylight Time"
}

    function printObject(obj) {
        for (let prop in obj) {
          console.log(`${prop}: ${obj[prop]}`);
        }
      }
    printObject(sydney)

    printObject(auckland)


//Section 9
// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let moreSports = teamsports;
// /* a */
// moreSports.push("Basketball");
// moreSports.unshift("Waterpolo");
// /* b */
// let dog2 = dog1;
// dog2 = "Spot";
// /* C */
// let cat2 = cat1;
// cat2.name = "Evie";
/* D = No they haven't changed, they are primitive objects, copies value but doesn't create new object */

/* E */
// let moreSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// let cat2 = { ...cat1 };
// let moreSports2 = [...moreSports];

// Question 10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
// //a
  let person1 = new Person("Keegan", 22);

// //b
    let person2 = new Person("Charlotte",22)


//     console.log(person1.name); // Keegan
//     console.log(person1.age); // 22
//     console.log(person1.human); // True

//     console.log(person2.name); // Charlotte
//     console.log(person2.age); // 22
//     console.log(person2.human); // True
// c
class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  }

  let person3 = new PersonClass("Will", 21);
  console.log(person3.name); // Will
  console.log(person3.age); // 21
  console.log(person3.human); // True