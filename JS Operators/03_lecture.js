

/**   JavaScript Chaining Operator (?.)
 * 
 *The optional chaining operator (?.) allows you to safely access deeply nested properties 
 of an object without throwing an error if the property or object doesn't exist. Instead of 
 causing an error, it returns undefined if any part of the chain is null or undefined.

# How It Works
 If the property exists → It will return its value.
 If the property does not exist (undefined or null) → It returns undefined instead of throwing an error.
 */


//  let user = {};
//  console.log(user.address.city);     
 // TypeError: Cannot read properties of undefined (reading 'city')

//  console.log(user?.address?.city);      // undefined


let user = {
    name : "rohan",
    address : {
         city : "Indore"
    }
};

// console.log(user.address?.city);        // Indore
// console.log(user.address?.country);     // undefined


/**  JavaScript in and instanceof operators
 * 
 * JavaScript Relational Operators are used to compare their operands and determine the 
 * relationship between them. They return a Boolean value (true or false) based on the 
 * comparison result.
 * 
 */

/** #JavaScript in operator 
 *  The in operator is used to check if a property exists in an object or its prototype chain.
    -> It does not check the value of the property, just its existence.
    -> It works for objects and arrays.
    syntax : 'property' in object
 */

    //Checking Properties in Objects:
let car = {brand : "Toyota", model : "Camry"};
// console.log("model" in car)     // true
// console.log("year" in car)      // false

    //Checking Array Indices:
let fruits = ["apple", "banana", "papaya"];
// console.log(1 in fruits);       // true(index 1  exists)
// console.log(5 in fruits)        // false(index 5 does not exist)

    //Checking Properties in the Prototype Chain:
let obj = {name : "alice"};
// console.log("toString" in obj);     // true
// console.log("toLocaleString" in obj) // true;

/** #JavaScript instanceof operator 
 *  The instanceof operator checks if an object is an instance of a specific class 
 *  or constructor function, including its inheritance chain.
    syntax : object instanceof Constructor
 */

// 1. Checking an Object's Class:
class animal {}
let cat = new animal();
// console.log(cat instanceof animal);     // true
// console.log(cat instanceof Object);     // true


// 2. Checking Built-In Types:
let str = new String("Hello");
// console.log(str instanceof String);     // true
// console.log(str instanceof Object)      // false

// 3. Checking Arrays:
let arr = [1, 2, 3];
// console.log(arr instanceof Array)       // true
// console.log(arr instanceof Object)      // true







