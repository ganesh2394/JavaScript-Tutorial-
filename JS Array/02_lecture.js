// Array Creation

// 1. Create using Literal:- 

let a = [];     // create an empty array

// console.log(a);         // []

// Creating an Array and Initializing with Values
let b = [1, 2, 3];

// console.log(b);         // [ 1, 2, 3 ]

// 2. Create using new Keyword (Constructor):-

let aa = new Array();

// console.log(aa);        // []

let bb = new Array(1,2,3);

// console.log(bb);        // [ 1, 2, 3 ]

/** Note: Both the above methods do exactly the same. Use the array literal method for 
 * efficiency, readability, and speed.
 */

// methods evaluation :-

// Creating an Array and Initializing with Values
let language = ["html", "css", "javascript"];

// console.log(language);      // [ 'html', 'css', 'javascript' ]

// Accessing First Array Elements
// console.log(language[0]);           // html

//Accessing Last Array Elements
// console.log(language[language.length - 1]);       // javascript

// --Modifying element
language[1] = "bootstrap";
// console.log(language);          // [ 'html', 'bootstrap', 'javascript' ]


// --Adding element to the array:-

// push : add at last
language.push("Node.js");
// console.log(language[language.length - 1]);    // Node.js
// console.log(language)       // [ 'html', 'bootstrap', 'javascript', 'Node.js' ]

// unshift : add at beginning
language.unshift("Web Development");
// console.log(language[0]);   // Web Development
// console.log(language);      //[ 'Web Development', 'html', 'bootstrap', 'javascript', 'Node.js' ]

// --Remove an element to the array:-

// pop : remove and return from the last

// console.log("Original Array :", language);

let lst_ele = language.pop();       
// console.log(lst_ele);               // Node.js
// console.log("After remving the last element : ", language)      // [ 'Web Development', 'html', 'bootstrap', 'javascript' ]

// remove and return first element fromt the array
// console.log("Before removing First element:",language); // [ 'Web Development', 'html', 'bootstrap', 'javascript' ]
let fst_ele = language.shift();
// console.log("First removed element :", fst_ele);
// console.log("After removing first element :", language);        // [ 'html', 'bootstrap', 'javascript' ]


// --length property of the array
find_len = language.length;
// console.log("Ttl elements in the array : ", find_len);
// Ttl elements in the array :  3


// --iteration on the array

let numbers = [3, 4, 7, 2, 9, 11];

// Way-01: for loop

// for(let i = 0; i < numbers.length; i++){
//      console.log(numbers[i]);
// }

// Way-02: forEach loop

// numbers.forEach(
//     function myFun(x){
//      console.log(x);
// });

// -- Array concatenation:-

let frontEnd = ["React", "Angular", "HTML", "CSS"];
let backEnd = ["Java", "Python", "PHP", "Node.js"];

// console.log(frontEnd);
// console.log(backEnd);

// Concatenate both arrays
let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

// --Convert array ot String:-

let hobbies = [
    "reading",
    "singing",
    "playing",
]
console.log(typeof hobbies);        // object
console.log(hobbies);               // [ 'reading', 'singing', 'playing' ]

// toString()
let str_hobbies = hobbies.toString();

console.log(typeof hobbies);        // object
console.log(hobbies);               // [ 'reading', 'singing', 'playing' ]

console.log(typeof str_hobbies);    // string
console.log(str_hobbies)            // reading,singing,playing


// --Recognizing a JavaScript Array:-
// console.log(hobbies instanceof Array);      // true

// using Array.isArray(pass_instance);
// let is_array = Array.isArray(hobbies);
console.log(is_array);                      // true  






