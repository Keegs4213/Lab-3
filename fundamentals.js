// // Section 1 Q1

console.log("" + 1 + 0) //"10"


// //Q2
"" - 1 + 0 = -1

// //Q3
true + false = 1


// //Q4
!true = false

//Q5 
6 / "3" = 2

//Q6
"2" * "3" = 6

//Q7
4 + 5 + "px" = 9px

//Q8
"$" + 4 + 5 = $9

//Q9
"4" - 2 = 2

//Q10
"4px" - 2 = NaN

//Q11
" -9 " + 5 = " -9 5"

//Q12
" -9 " - 5 = -14

//Q13
null + 1 = 1

//Q14
undefined + 1 = NaN

//Q15
undefined == null = true

//Q16
undefined === null = false

//Q17
" \t \n" - 2 = -2

//Section 2
//Q1
let three = "3"
let four = "4"
let thirty = "30" 

let addition = three + four
let multiplication = three * four 
let division = three / four 
let subtraction = three - four 

let lessThan1 = three < four 
let lessThan2 = thirty < four 
// Addition is giving incorrect answer, the + operator is concatenating the strings "3" and "4" to give the answer "34".
// We can fix this by converting the strings to numbers using .toNumber or starting with numbers when the variables are declared

//Section 3
if (0) console.log('#1 zero is true') //Will not print, 0 is not a truthy value.
if ("0") console.log('#2 zero is true') // Will print because non-empty string is considered truthy value.
if (null) console.log('null is true') // Will not print, null will not return true in a boolean 
if (-1) console.log('negative is true') // Will print, any non-zero number considered truthy value. In this case -1 is truthy
if (1) console.log('positive is true') // Will print, number 1 is truthy value.

//Section 4
//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do? 
let a = 4, b = 7; 
let result = `${a} + ${b} is `; 

(a + b < 10 ? 'less than 10' : 'greater than 10') 
console.log(result)
// The "+=" is shorthand for concatenating a string from a string already defined. result += is result = result +
