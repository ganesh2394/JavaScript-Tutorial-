/**                              JavaScript Strings
 * 
 * A string in JavaScript is a sequence of characters enclosed in either single quotes ('), 
 * double quotes ("), or backticks (`). 
 * 
 * Strings are a primitive data type in JavaScript and are immutable, meaning their content 
 * cannot be changed after creation. 
 * 
 * Strings can be manipulated using various methods provided by JavaScript.
 * 
 */

// # Creaing String :-

// Way-01 : Using double and single quotes:
let str1 = 'Hello, World';
let str2 = "JavaScript is Awesome!";

console.log(str1);
console.log(str2);

// Way-2 : Using backticks (Template Literals):
let name = "Ankit";
let str3 = `Hello, ${name}! Welcome to JavaScript Tutorial.`;
// console.log(str3);

// Way-03: Using the String constructor:

let str4 = new String("Hello!");
console.log(typeof str4);           // object


// String Property : length
console.log(name.length);       // 5

// --------( Some Common Properties )-------- :



