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

// console.log(str1);
// console.log(str2);

// Way-2 : Using backticks (Template Literals):
let name = "Ankit";
let str3 = `Hello, ${name}! Welcome to JavaScript Tutorial.`;
// console.log(str3);

// Way-03: Using the String constructor:

let str4 = new String("Hello!");
// console.log(typeof str4);           // object


// String Property : length
// console.log(name.length);       // 5

// --------( Some Common Properties )-------- :

// 1. charAt(index) : Returns the character at a specific index in the string.

let str = "JavaScript";
// console.log(str.charAt(3));         // a

// 2. charCodeAt(index) : Returns the Unicode of the character at the specified index.
// console.log(str.charCodeAt(1))      // 97

// 3. concat() : Joins two or more strings and returns a new string.
let first = "Ram";
let last = " Sharma";
let full_name = first.concat(last);
// console.log(full_name);         // Ram Sharma

// 4. includes(substring) : Checks if the string contains a specified substring, returning true or false.
let about = "Learn JavaScript easily!";
// console.log(about.includes("JavaScript"));      // true
// console.log(about.includes("Python"));          // false

// 5. indexOf(substring): Finds the first occurrence of a substring and returns its index (or -1 if not found).
// console.log(about.indexOf("JavaScript"));   //  6

// 6. lastindexOf(substring) : Finds the last occurrence of a substring and returns its index.
// console.log(about.lastIndexOf("JavaScript"));       // 6

// 7. slice(start, end):Extracts a section of a string and returns it as a new string.
// console.log(about.slice(0, 6));     // Learn
// console.log(about.slice(3));        // rn JavaScript easily!

// 8. substring(start, end) : Similar to slice, but does not accept negative indices.

// console.log(about.slice(6, 15));     // JavaScript
// console.log(about.slice(3));        // rn JavaScript easily!

// 9. toUppercase / toLowercase : Converts the string to lowercase or uppercase.

let username = "Ramesh";
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());

// 10. trim() : Removes whitespace from both ends of a string.
let exmple = "      Hello, World !      ";
// console.log(exmple.length);             // 26
// console.log(exmple.trim().length);      // 14

// 11. split(saperator) : Splits the string into an array based on the specified separator.
let string1 = "apple,banana,orange";
let fruits = string1.split(", ");
// console.log(fruits);        // [ 'apple', 'banana', 'orange' ]

// 12. replace(searchValue, newValue) : Replaces the first occurrence of a substring with a new value.
let sub = "I like JavaScript";
let newSub = sub.replace("JavaScript", "Python");
console.log(sub);           // I like JavaScript
console.log(newSub);        // I like Python















