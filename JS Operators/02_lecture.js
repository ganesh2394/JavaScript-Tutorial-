/**     1. Arithmetic Operators
        These operators are used to perform mathematical calculations.
 */

let a = 10;
let b = 2;

// addition
console.log("Addition", a + b);         // 12

// subtraction
console.log("Subtraction", a - b);      // 8

// multiplication
console.log("Multiplication", a * b)      // 20

// division
console.log("Division", a/b)    // 5

// Modulus (Remainder)
console.log("Remainder",a%b);       // 0

// Exponentiation (Power)
console.log(a**b);          // 100


/**     2. Assignment Operators
        These are used to assign values to variables.
 */

// Assigns a value
let x = 5;
console.log(x);         // 5

// Add and assign x = x + value
x+=3;
console.log(x);      // 8

// Subtract and assign x = x - value
x-=3;
console.log(x);         // 5

// Multiply and assign x = x * value
x*=3;
console.log(x);         // 15

// Divide and assign x = x / value
x/=3;
console.log(x);     // 5

/**     3. Comparison Operators
        These are used to compare two values and return a boolean (true or false).
 */

// Equal to : ==
console.log(5 == '5')       // true

// Strict equal to (type + value) : ===
console.log(5 === '5')       // false

// Not equal to : !=
console.log(10 != 5);       // true

// Strict not equal : !==
console.log(5 !== '5');     // true

// Greater than : >
console.log(10 > 10);       // false

// Less than : <
console.log(2 < 7);       // true

// Greater than or equal to
console.log(5>=5);           // true

// Less than or equal to
console.log(4<=5);           // true


/**     4. Logical Operators
        These operators are used to combine multiple conditions.
        Logical AND (&&) : if both conditions are return true
        Logical OR (||) : if one of the condition is true.
        Logical NOT (!) : invert the condition
 */

// OR(||)
console.log(true || false);     // true
console.log(false || false);    // false


// AND (&&)
console.log(true && false)   // false
console.log(true && true)    // true


// NOT (!) : invert
console.log(!true)      // false
console.log(!false)     // true


/**     5. String Operators
        These are used to work with strings.
 */

// Concatenation
console.log("Hello" + " Anuj");      // Hello Anuj

// Concatenation and assign
let greet = "Hello ";
greet += "Forks";
console.log(greet);     // Hello Forks


/**     6. Ternary Operators
        A shorthand for if-else.
        syntax : condition ? valueIfTrue : valueIfFalse;
 */
let age = 19;
let access = (age >= 18) ? "Allowd" : "Not Allowed"
console.log(access);        // Allowed


/**     6. Type Operators
        Used to determine or work with the type of a variable.
 */

// typeof : Returns the type of a variable
let num = 45;
console.log(typeof num);        // number


// instanceof : Checks if an object is an instance of a specific class
let array = [1, 2, 3];
console.log(array instanceof Array);     // true

// array is an instance of Array class






