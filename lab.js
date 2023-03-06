// Lab for understanding the variety of functions concept in JavaScript

// Requirement is to mimic the Pizza Making/Ordering procedure. Output of the program should be in the below order
// Started preparing Pizza
// Pizza Base is PreparedCheese is added on PizzaVeggies are added on PizzaPizza is heatedPizza is readyProgram 1:Create 6 normal functions in Javascript which prints the above lines and call those functions in sequence
// Program 2:Replace the above normal function with Javascript Expression functions format
// Program 3:Replace the Program 1 with arrow functions

// Program 4: For the program 1 make the functions asynchronous by using setTimeOut for different operations with different time durations. The output of this program should give the output in the order (Use callback pattern to solve this issue)Program 5 : Modify the program 4 to use Promises concept and achieve the required resultProgram 6 : Modify the program 5 to use async and await concept to achieve the required result

//Program 1
// function startPreparingPizza(){
//     console.log("Started preparing Pizza")
// }
// function pizzaBaseIsPrepared(){
//     console.log("Pizza Base is Prepared")
// }
// function cheeseIsAdded() {
//     console.log("Cheese is added on pizza")
// }
// function veggiesAreAdded() {
//     console.log("Veggies are added on pizza")
// }
// function pizzaHeated() {
//     console.log("Pizza is heated")
// }
// function pizzaReady() {
// console.log('Pizza is ready')
// }

// startPreparingPizza();
// pizzaBaseIsPrepared();
// cheeseIsAdded();
// veggiesAreAdded();
// pizzaHeated();
// pizzaReady();

//Program 2

// const startPreparingPizza = function(){
//     console.log("Started preparing Pizza")
// }
// const pizzaBaseIsPrepared = function(){
//     console.log("Pizza Base is Prepared")
// }
// const cheeseIsAdded = function() {
//     console.log("Cheese is added on pizza")
// }
// const veggiesAreAdded = function() {
//     console.log("Veggies are added on pizza")
// }
// const pizzaHeated = function() {
//     console.log("Pizza is heated")
// }
// const pizzaReady = function() {
// console.log('Pizza is ready')
// }

// startPreparingPizza();
// pizzaBaseIsPrepared();
// cheeseIsAdded();
// veggiesAreAdded();
// pizzaHeated();
// pizzaReady();

//Program 3

// const startPreparingPizza = () => {
//     console.log("Started preparing Pizza")
// }
// const pizzaBaseIsPrepared = () => {
//     console.log("Pizza Base is Prepared")
// }
// const cheeseIsAdded = () => {
//     console.log("Cheese is added on pizza")
// }
// const veggiesAreAdded = () => {
//     console.log("Veggies are added on pizza")
// }
// const pizzaHeated = () => {
//     console.log("Pizza is heated")
// }
// const pizzaReady = () => {
// console.log('Pizza is ready')
// }

// startPreparingPizza();
// pizzaBaseIsPrepared();
// cheeseIsAdded();
// veggiesAreAdded();
// pizzaHeated();
// pizzaReady();

//Program 4
// function orderReceived(nextFunc) {
//   console.log("Pizza order received");
//   setTimeout(nextFunc, 500, startPreparingPizza);
// }

// function startPreparingPizza(nextFunc) {
//   console.log("Started preparing Pizza");
//   setTimeout(prepareBase, 500, nextFunc);
// }
// function prepareBase(nextFunc) {
//   console.log("Pizza Base is Prepared");
//   setTimeout(addCheese, 500, nextFunc);
// }
// function addCheese(nextFunc) {
//   console.log("Cheese is added on Pizza");
//   setTimeout(pizzaHeated, 500, nextFunc);
// }
// function addVeggies(nextFunc) {
//   console.log("Veggies is added on Pizza");
//   setTimeout(pizzaHeated, 500, nextFunc);
// }
// function pizzaHeated(nextFunc) {
//   console.log("Pizza is heated");
//   setTimeout(pizzaReady, 500, nextFunc);
// }
// function pizzaReady() {
//   console.log("Pizza is ready");
// }

// orderReceived(startPreparingPizza);

// Program 5 : Modify the program 4 to use Promises concept and achieve the required result

function orderReceived() {
  return new Promise(function (resolve, reject) {
    console.log("Pizza order received");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}

function startPreparingPizza() {
  return new Promise(function (resolve, reject) {
    console.log("Started preparing pizza");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}

function prepareBase() {
  return new Promise(function (resolve, reject) {
    console.log("Pizza base is prepared");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}

function addCheese() {
  return new Promise(function (resolve, reject) {
    console.log("Added cheese to pizza");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}
function addVeggies() {
  return new Promise(function (resolve, reject) {
    console.log("Added veggies to pizza");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}

function pizzaHeated() {
  return new Promise(function (resolve, reject) {
    console.log("Pizza is heated");
    setTimeout(function () {
      resolve();
    }, 500);
  });
}

function pizzaReady() {
  console.log("Pizza is ready");
}

orderReceived()
  .then(function () {
    return startPreparingPizza();
  })
  .then(function () {
    return prepareBase();
  })
  .then(function () {
    return addCheese();
  })
  .then(function () {
    return addVeggies();
  })
  .then(function () {
    return pizzaHeated();
  })
  .then(function () {
    pizzaReady();
  });

// orderReceived(startPreparingPizza);

// Program 6 : Modify the program 5 to use async and await concept to achieve the required result
