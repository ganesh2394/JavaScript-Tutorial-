/**                                  JavaScript Syntax
 *
 *      JavaScript syntax refers to the set of rules that determines how JavaScript programs are
 *      constructed.
 */

// console.log("This is JavaScript Tutorial.");

// variable declaration

let a, b;

// assign value
a = 5;
b = 6;

// compute values
let c = a + b;
// console.log(c)

/**                 Java Script Values 
 * 
 *  There are two types of values defined in JavaScript Syntax:
    Fixed Values: These are known as the literals.
    Rules : 
    JavaScript Numbers can be written with or without decimals.
    Javascript Strings are text that can be written in single or double quotes.
 */

let number1 = 44;
let number2 = 49.22;

let string1 = "ganesh";
let string2 = "prasad";

/**  Variable values: These are called variables.
 *  A JavaScript variable is the simple name of the storage location where data is stored. 
 *  There are two types of variables in JavaScript which are listed below: 
    1) Local variables: Declare a variable inside of a block or function.
    2) Global variables: Declare a variable outside function or with a window object.
 */

// global variable
let fruit = "apple";

function myFruit() {
  // local variable
  let another_fruit = "Pine-apple";

  // console.log(fruit);         // display global variable data.
  // console.log(another_fruit); // display local varialbe data.
}

// myFruit();      // invoke function

/**  JavaScript operators :
 *
 * JavaScript operators are special symbols or keywords that perform actions on values
 * (called operands) to produce a result.
 *
 * Types of Operators :
 */

// 1. Arithmatic operators:-
// Perform basic math: + (add), - (subtract), * (multiply), / (divide), % (remainder).

// console.log(3 + 5);      // 8

// 2. Assignment operators:-
// Assign values to variables: = (equal), +=, -=, etc.

let value_c = 5;
value_c += 16;
// console.log(value_c);        // 21

// 3. Comparision operators:-
// Compare two values and return true or false: ==, ===, !=, <, >, etc.

// console.log(10 < 4);        // false

// 4. Logical Operators:-
// Combine conditions: && (AND), || (OR), ! (NOT).

// console.log(true && false);     // false

// 5. Bitwise Operators:-
// Perform operations on binary numbers: &, |, ^, etc.

// console.log(2&3);       // 10 & 11 => 10 => 2

// 6. String Operators:-
//Combine strings using +.

let full_name = "ramesh" + " kumar";
// console.log(full_name);          // ramesh kumar

// 7. Ternary Operator:-
//A shortcut for if-else: condition ? value_if_true : value_if_false.

let ans = 5 > 3 ? "Yes" : "No";
// console.log(ans);               // Yes

// 8. Type Operators:-
//Check or change data types: typeof, instanceof.

// console.log(typeof "string");           // string

// 9. Unary Operators:-
//Work with a single value: +, -, ++ (increment), -- (decrement), ! (logical NOT).
let a_val = 6;
a_val++;
// console.log(a_val);         // 7

// 10. Spread and Rest Operators:-
// Spread: Expands arrays/objects (...).
// Rest: Groups multiple values (...).

//   ---<Spread Operator (...)>---
// The spread operator expands (or "spreads") the elements of an array, object, or string.

// copying array
const array = [1, 2, 3];
const new_array = [...array, 4, 5, 6];
// console.log(array);             // [ 1, 2, 3 ]
// console.log(new_array);         // [ 1, 2, 3, 4, 5, 6 ]

// merging-array
const marvel_heros = ["Spider-man", "Iron-man", "Thor"];
const dc_heros = ["Bat-man", "Flash", "Captain Atom"];

const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);   // [ 'Spider-man', 'Iron-man', 'Thor', 'Bat-man', 'Flash', 'Captain Atom' ]

// Spreading-in-Objects
const person = { name: "ramesh", age: 45 };
const update_person = { ...person, location: "indore" };

// console.log(person);            // { name: 'ramesh', age: 45 }
// console.log(update_person);     //  { name: 'ramesh', age: 45, location: 'indore' }

// Function-Arguments
const numbers = [10, 20, 30];
// console.log(Math.max(...numbers))       // 30

//   ---<Rest Operator (...)>---
// The rest operator collects multiple elements into a single array or object.
// Think of it as the reverse of the spread operator.

// Destructuring-Arrays

const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
// console.log(first);     // 1
// console.log(second);    // 2
// console.log(rest);      // 3, 4, 5, 6

// Destructuring-Objects
const person_details = {
  name: "raghav",
  age: 23,
  location: "New Delhi",
  email: "raghav@google.com",
};
const { name, age, ...details } = person_details;
// console.log(name);      // raghav
// console.log(age);       // 23
// console.log(details)    // { location: 'New Delhi', email: 'raghav@google.com' }

/**
 * 
 * Key Difference :- 
    Spread: Expands elements.
    Rest: Collects elements.

 */

/**  JavaScript Expressions ?
 *
 * Javascript Expression is the combination of values, operators, and variables.
 * It is used to compute the values.
 *
 */

// declaration
let sum, num1, num2;

// assign values
(num1 = 4), (num2 = 5);
// addition [computation]
sum = num1 + num2;

console.log(sum); // 9

// JavaScript Keywords : The keywords are the reserved words that have special meanings in JavaScript.

// example : let, var, const, new, function, etc...

/**  JavaScript Data Types 
 * 
 * JavaScript provides different datatypes to hold different values on variables. 
 * JavaScript is a dynamic programming language, which means do not need to specify 
 * the type of variable. 
 * 
 * There are two types of data types in JavaScript. 
    1. Primitive data type
    such as : Number, String, Undefined, Null, Object, Symbol, Boolean

    2. Non-primitive (reference) data type
    such as : Objects, Arrays, Function, Map, Set and Date
 */
