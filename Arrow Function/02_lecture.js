/**                    Arrow Function : (param1, param2, ..., paramN) => expression  
 * 
 * Difference : 
 * 1. Shorter Syntax
 * 2. Implicit Return
 * 3. No this Binding
*/

// Traditional function syntax:-
const add = function(a,b){
     return a + b;
}
console.log(add(5, 6));     // 11

// Arrow Function syntax:-
const addition = (a, b) => a + b;
console.log(addition(8, 9));        // 17

// Implicit Return
const square = x => x * x;
console.log("Square of 9 is ", square(9));         // 81


// No this binding
function Person(name){
     this.name = name;
     setTimeout(()=>{
        console.log(this.name);
     }, 1000);
}

const person = new Person("Amit");
