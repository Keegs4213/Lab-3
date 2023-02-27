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