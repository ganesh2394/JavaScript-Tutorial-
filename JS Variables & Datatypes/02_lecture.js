/**                 Global and Local variable in JavaSript
 *
 * In JavaScript, variables can either have global scope (accessible from anywhere in the program)
 * or local scope (accessible only within a specific block, function, or module).
 *
 */

/**1. Global Variables:-
        Global variables are declared outside of any function or block and are accessible from any part of the program.

        Key Characteristics:
        -> Declared outside of functions or blocks.
        -> Accessible anywhere in the program, including inside functions or blocks.
        -> Can lead to unexpected behavior if multiple parts of the program modify the same variable.
 * 
 */

// Global variable
let global_var = "I am a global variable";

function printGlobalVar() {
  console.log(global_var); // Accessing the global variable
}

// printGlobalVar(); // Output: I am a global variable

// Modifying the global variable
global_var = "I have been updated";
// console.log(global_var);     // Output: I have been updated

/**  Common Issues with Global Variables:-
     -> Unintended Modifications: Global variables can be overwritten by mistake, leading to bugs.
     -> Cluttered Namespace: Too many global variables can make the program harder to manage.
*/

/**2. Local Variables:-
        Local variables are declared inside a function, block, or module and are accessible only within that specific scope.

        Key Characteristics:
        -> Declared using let, const, or var inside a block {} or function.
        -> Cannot be accessed outside the block or function where they are defined.
        -> Helps avoid conflicts and accidental modifications of variables.
 * 
 */

let printLocalVar = function () {
  let localVar = "I am Local Variable";
  console.log(localVar);        // Output: I am Local Variable
};

// printLocalVar();        

// Trying to access localVar outside the function
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


/** Notes : 
 * 1. Variables declared with let or const inside a block {} are accessible only within that block.
 * 2. If a global and a local variable have the same name, the local variable takes precedence within its scope.
 */


let message = "Global variable";

function showVar(){
   let message = "Local variable";
   console.log(message);
}

// showVar();          // Local variable
// console.log(message);       // Global variable   


