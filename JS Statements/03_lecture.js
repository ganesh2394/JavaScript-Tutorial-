/**   JavaScript Control Statements: break, continue, and return
 *
 * These control statements allow us to manage the flow of loops, conditions, and functions.
 * They help to either exit loops, skip iterations, or return values from functions.
 */

/** break Statement:-
 *
 * The break statement is used to exit a loop or switch statement immediately, regardless of the
 * loop's condition or remaining iterations.
 *
 * Key points :
 *  -> Exits the current loop or block completely.
 *  -> Often used in switch statements or loops to stop execution once a certain condition is met.
 */

for(let i = 1; i <= 10; i++){
     if(i === 3){
        break;
     }
     console.log(i); // Output : 1 2
}

/** continue Statement:-
 *
 * The continue statement is used to skip the current iteration of a loop and move to the
 * next iteration without exiting the loop.
 *
 * Key points :
 *  -> Skips the rest of the code in the loop for the current iteration.
 *  -> Useful when you want to ignore certain conditions and continue looping.
 */

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Skip the iteration when i equals 3
    }
    console.log(i); // Outputs: 1, 2, 4, 5
  }

/** return Statement:-
 *
 * The return statement is used in functions to exit the function and optionally return a value
 * to the calling code.
 *
 * Key points :
 *  -> Immediately stops the execution of a function.
 *  -> Can return a value (or nothing, which is equivalent to returning undefined).
 *  -> After return, no further code in the function is executed.
 */

function greet(name) {
  if (!name) {
    return;
  }
  console.log(`Hello, ${name}`);
}

greet("Ganesh");        // Hello Ganesh
