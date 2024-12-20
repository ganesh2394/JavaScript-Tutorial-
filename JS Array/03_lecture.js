// Array methods :

// --Adding and removing an element:-
let carts = ["Milk", "Egg"];
// console.log(carts);

//push(): Adds one or more elements to the end of the array.
carts.push("Bread");
// console.log(carts);     // [ 'Milk', 'Egg', 'Bread' ]

// pop():remove the last element from the array.
carts.pop();
// console.log(carts);     // [ 'Milk', 'Egg' ]

// unshift():Adds one or more elements to the beginning of the array.
carts.unshift("Bread");
// console.log(carts);         //  [ 'Bread', 'Milk', 'Egg' ]

// shift():Removes the first element from the array.
carts.shift();
// console.log(carts);         //  [ 'Milk', 'Egg' ]

// --Searching element

// indexOf() : Returns the index of the first occurrence of a value.
// console.log(carts.indexOf("Bread"));        //-1
// console.log(carts.indexOf("Egg"));          // 1

// includes() : Checks if an array contains a specific value.
// console.log(carts.includes("Egg"));         // true
// console.log(carts.includes("Butter"));      // false

// Finds the first element that satisfies a condition.
let groceryList = [
  { item: "milk", price: 50 },
  { item: "egg", price: 10 },
  { item: "butter", price: 60 },
  { item: "bread", price: 20 },
];

let expensiceItem = groceryList.find((product) => product.price > 30);
// console.log(expensiceItem);          // { item: 'milk', price: 50 }

// Returns the index of the first element that satisfies a condition.
// arrow function
let index1 = groceryList.findIndex((product) => product.price > 30);
// normal function
let index = groceryList.findIndex(function (product) {
  return product.price > 30;
});
// console.log(index);     // 0

// --Transforming Arrays:-

// map() : Creates a new array by applying a function to each element.
let prices = [50, 30, 20];
let discountedPrice = prices.map((price) => price * 0.9);
// console.log(prices);            // [ 50, 30, 20 ]
// console.log(discountedPrice);   // [ 45, 27, 18 ]

// filter() : Creates a new array with elements that pass a condition.
let expensiveChez = prices.filter((price) => price > 25);
// console.log(prices);
// console.log("Expensive Items: " , expensiveChez);  // Expensive Items:  [ 50, 30 ]

// reduce():Reduces the array to a single value.
let total_price = prices.reduce((sum, price) => sum + price, 0);
// console.log(total_price);       // 100

// --Iterating an Array
// console.log(carts);
// carts.forEach(cart => console.log(cart));

console.log("Original Array : ", prices);
prices.sort((a, b) => a - b);

console.log("Sorted Array : ", prices);

prices.reverse();
console.log("Reverse Array : ", prices);

// --Combining and Splitting Arrays:

let items1 = ["Milk", "Butter"];
let items2 = ["Bread", "Egg"];

// concat
let items3 = items1.concat(items2);
console.log(items3); // [ 'Milk', 'Butter', 'Bread', 'Egg' ]

// join():Converts an array to a string by joining elements.
let strItems3 = items3.join(", ");
console.log(strItems3); // Milk, Butter, Bread, Egg

// split() : Not an array method but used on strings to create arrays.
let cartString = "Milk, Butter, Bread, Egg";
let cartArray = cartString.split(", ");
console.log(cartArray); //[ 'Milk', 'Butter', 'Bread', 'Egg' ]
