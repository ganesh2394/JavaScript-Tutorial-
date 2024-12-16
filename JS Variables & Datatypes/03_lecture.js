/**
 *          JavaScript Let, Const and Var variables
 *
 * variable means : containers that are used to store some data value.
 *
 * # Block Scope :-
 * The variables which are declared inside the { } block are known as block-scoped variables.
 *
 * # Global Scope:-
 * A global scope variable is a variable declared in the main body of the source code, outside all functions.
 *
 * # Function Scope:-
 * A function scope variable is a variable declared inside a function and cannot be accessed outside the function.
 */

// About the let variable

let global_var = 22; // global variable
{
  let local_var = 12; // local variable

  // console.log(global_var);
  // console.log(local_var);
}

// console.log(global_var);        // 22
// console.log(local_var);         // ReferenceError: local_var is not defined

function show_x() {
  let x = "x is showing";
  console.log(x); // funciton scoped variable
}

// show_x();        // x is showing

/** Notes about let variable :
 * 1. The variables declared using let can be redeclared inside other blocks.
 * 2. Do not support hoising.
 * 3. We cannot redeclare variables using the let keyword inside the same blocks. It will throw an error.
 * */

// About the const variable

/** The const keyword in JavaScript is used to create variables that cannot be redeclared or changed after their first assignment.
 * This keeps the variable’s value fixed.
 *
 * # Characteristics :
 * 1. Cannot be reassigned
 * 2. Block Scope
 * 3. Must be assigned during declaration
 * 4. Works with primitive values
 * 5. Objects and arrays can be modified
 * 6. Can’t reference new objects or arrays
 * 7. Cannot be hoisted
 * 8. Can be redeclared in different block scopes
 * */

// cannot be reassigned
const a = 7;
// a+=5;           // TypeError: Assignment to constant variable.
// console.log(a);

// block scoped
if (true) {
  let x = 4;
  //  console.log(x);
}
// console.log(x);  // ReferenceError: x is not defined

//Must be assigned during declaration
// const val;      // declaration must be initialized
val = 4;

// Cannot be hoisted
// val2 = 4;               // assign
// console.log(val2);      // use
// const val2;             // declare

// Objects and arrays can be modified
const array = [1, 2, 3, 4, 5];
// console.log(array[0]);          // 1

// modified the element
array[0] = 8;
// console.log(array[0]);      // 8

// About the var variable

// The JavaScript var statement declares variables with function scope or globally.
