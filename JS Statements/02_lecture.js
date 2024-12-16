/**  Conditional Statement in JavaScript
 *
 * Conditional statements allow you to execute specific blocks of code based on whether a
 * condition is true or false. These statements control the flow of a program, enabling it
 * to make decisions and respond differently under various circumstances.
 */

/** 1. if-statement
 *  The if statement checks a condition.
 *  if condition evaluates to true, the code inside the if block is executed.
 *  if condition is false, the block is skipped.
 *
 */

let age = 18;
if (age >= 18) {
  console.log("You are eligible for vote.");
}

/** 2. if-else statement
 *  The if...else statement adds an alternative block of code to execute if the condition is
 * false.
 *
 */

let isRainy = true;
if (isRainy) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine.");
}

/** 3. if...else if...else Statement
 *  This statement allows for multiple conditions to be checked in sequence.
 * As soon as one condition evaluates to true, its corresponding block of code is executed,
 * and the rest are skipped.
 */

let marks = 80;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

/** 4. switch Statement
 *  The switch statement is used to perform different actions based on the value of a variable or expression.
 *  It evaluates an expression and matches the value to a case. If a match is found, the corresponding block of code is executed.
 *  Use the break keyword to exit the switch block after executing a case.
 */

let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}
