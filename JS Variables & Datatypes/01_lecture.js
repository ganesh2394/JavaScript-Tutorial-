/**                     Variables and Datatypes in JavaScript
 * 
 * # What is a Variable? 
 * A variable is a container for storing data values that can be used or modified later in a program.
 * 
 * Declaring Variables:-
    JavaScript allows you to declare variables using three keywords:
    -> var (Old and rarely used now)
    -> let (For block-scoped variables, introduced in ES6)
    -> const (For constants, introduced in ES6)
 */

/**         let variable
 *
 * important notes:
 * 1. Allows block-level scoping.
 * 2. Can be updated but not re-declared within the same scope.
 * syntax : let variableName = value;
 */

let name = "Bob";
// console.log(name);      // Bob
name = "Alice"; // update value and works
// console.log(name);      // Alice

/**         const variable
 *
 * important notes:
 * 1. Constant variables that cannot be reassigned.
 * 2. Must be initialized during declaration.
 * syntax : const variableName = value;
 */

const pi = 3.14;
// pi = 3.15           // TypeError: Assignment to constant variable.
// console.log(pi);       // 3.14

/**         var variable
 *
 * important notes:
 * 1. Function-scoped (not block-scoped), which can lead to unexpected behavior.
 * 2. Rarely used in modern JavaScript due to let and const.
 * syntax : var variableName = value;
 */

var age = 25;
// age = 30;       // Works
// console.log(age);    // Output: 30

/**             Variable Naming Rules
 * 
 *  1. Must start with a letter, _, or $.
    2. Cannot start with a number.
    3. Are case-sensitive (e.g., name and Name are different).
    4. Cannot use reserved keywords (e.g., let, var, function, etc.).
 */

/**                             Data Types in JavaScript
 *
 * JavaScript has 8 data types, categorized into primitive and non-primitive (reference).
 * 1. Primitive Data Types :
 * -------------------------
 * 1. Number 2. String  3. Null  4. Symbol
 * 5. BigInt 6. Undefined 7. Boolean
 */

// Number
let age1 = 5;
// console.log(typeof age1);       // number

// String
let first_name = "sohan";
// console.log(typeof first_name)    // string
// console.log(typeof "");              // string

// Boolean
let isLoggedIn = true;
// console.log(typeof isLoggedIn)      // boolean

// Undefined
let unknown;
// console.log(typeof unknown)         // undefined

// Null
let empty = null;
// console.log(typeof empty);      // object

// BigInt
let large_number = BigInt(1234567890);
// console.log(typeof large_number);       // bigint

// Symbol :
// Introduced in ES6, Symbol represents a unique and immutable value, often used as object keys.

let s1 = Symbol("description1");
let s2 = Symbol("description2");

// console.log(s1 === s2);         // false
// console.log(typeof s1);         // symbol

/* 2. Non-primitive Data Types : 
 * -----------------------------
Non-primitive data types are also called reference types because they store 
references to values rather than the actual value itself. These include:
 * 1. Object
 * 2. Array
 * 3. Function
 * 4. Map and Set
 * 5. Date
 */

/** 1. Object :-
 *  An object is a collection of key-value pairs. The keys are called properties, and the values can be of any type (including other objects). 
 *  Objects are the foundation of most JavaScript features. 
 *  syntax : 
 * let obj = {
    key1: value1,
    key2: value2,
    ...
    };
 */

let person = {
  name: "Harshit",
  age: 28,
  isEmployed: true,
};

// console.log(person.name);   // Harshit
// console.log(person["age"]);   // 28
// console.log(person[age]);      // undefined

// Adding a new property
person.country = "India";

// console.log(person);        // { name: 'Harshit', age: 28, isEmployed: true, country: 'India' }

/** 2. Array:-
 * An array is an ordered list of values (called elements). Arrays can store values of any data type,
 * and they are zero-indexed (i.e., indexing starts at 0).
 * syntax :
 * let array = [element1, element2, ...];
 */

let fruits_name = ["apple", "banana", "cherry"];

// console.log(fruits_name[0]);    // apple
// console.log(fruits_name.length)  // 3

// Adding a new element
fruits_name.push("mango");
// console.log(fruits_name);       // [ 'apple', 'banana', 'cherry', 'mango' ]

/** Common Array Methods:
    -> push(): Add an element to the end.
    -> pop(): Remove the last element.
    -> shift(): Remove the first element.
    -> unshift(): Add an element to the beginning.
 */

/** 3. Function
     * A function is a reusable block of code that performs a specific task. 
     * Functions can accept inputs (parameters) and return outputs.
     *syntax : 
     function functionName(parameters) {
        // Code to execute
        return value;
    }
 */

function add(a, b) {
  return a + b;
}

let sum = add(8, 9); // invoke function
// console.log(sum);

// Anonymous Function (Stored in a Variable):
let greet = function (name) {
  return `Hello ${name}`;
};
// console.log(greet("Ganesh")); // Hello Ganesh

/** 4. Map
     * A Map is an object that stores key-value pairs, 
     * where keys can be of any type (including objects and functions).
     *syntax : 
      let map = new Map();
      map.set(key, value);

 */

let map = new Map();
map.set("name", "himesh");
map.set(1, "one");

// console.log(map.get("name"));    // himesh
// console.log(map.size);           // 2


/** 5. Set
     * A Set is a collection of unique values. 
     * It does not allow duplicate values.
     *syntax : 
      let set = new Set([values]);

 */

let set = new Set([1, 2, 3, 4, 5]);
// console.log(set);                 // Set(5) { 1, 2, 3, 4, 5 }

set.add(6);
// console.log(set.has(2));      // true


/** 6. Date
     * The Date object is used to work with dates and times. 
     * It provides various methods for manipulating dates.
     *syntax : 
      let date = new Date();

 */


let currentDate = new Date();
// console.log(currentDate);        // 2024-12-16T06:56:47.097Z

let specificDate = new Date("2024-12-15");
// console.log(specificDate);          // 2024-12-15T00:00:00.000Z

// console.log(currentDate.getFullYear());    // 2024
// console.log(currentDate.getMonth());       // 11 (zero-based)
// console.log(currentDate.getDate());        // 16

   



