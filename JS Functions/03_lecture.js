/**  Different ways of writing functions in JavaScript
 * 
 */


// 1. Functoin Declaration
function fun1(a,b){
    console.log(a + b);
}

// calling function
// fun1(4,5);              // 9

// 2. Function Expression (anonymous function)

// The function is defined inside a variable, and the function’s value (its returned value) 
// is stored in that variable.

let fun2 = function(a,b){
    console.log(a + b);
}

// calling function
// fun2(9, 2);    // 11


// 3. Arrow Functions

// [introduce in ES6] => Instead of using the function keyword, you use an arrow (=>).
// no need to write function and return in single line code
// the function returns implicitly.

// let fun3 = (a,b) => return (a + b);     // SyntaxError: Unexpected token 'return'
// let fun3 = (a,b)=> (a + b);     

let fun3 = (a,b) => {
    return (a + b);
}

// calling function
// console.log(fun3(3,7));     // 10



/** Most Important Note : 
 *  Key Differences: Function Declaration vs. Function Expression
 *  ----------------------------------
 * Function Declaration: The function is defined and can be called anywhere in the code 
 * (even before it’s defined, due to something called “hoisting”).
 * -----------------------------------------------------------------
 * Function Expression: The function is defined as part of an expression (usually assigned to a variable), 
 * and it can only be called after the line where it’s defined.
 * 
 */

// function hoisting : function call before definition
abc1();

function abc1(){
     console.log("call me anywhere!");
}

abc1();

// abc2();     // ReferenceError: Cannot access 'abc2' before initialization

let abc2 = function(){
     console.log("call me after definition!")
}

abc2();     //no problem





