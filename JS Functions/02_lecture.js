// simple function : to add two numbers

function addTwo(num1, num2) {
  return num1 + num2;
}
// console.log(addTwo(9, 4));      // 13

// types of functions :-

/** 1. Named Function:-
    A named function has a specific name and can be called by its name.
    syntax : 
    function functionName(parameters) {
    // Code to be executed
    return value; // Optional
    }
*/

function greet(name) {
  return `Namaste!, ${name} ji`;
}
// console.log(greet("Ramesh"));    // Namaste!, Ramesh

/** 2. Anonymous Function:-
    An anonymous function has no name and is often assigned to a variable or used as an argument.
    syntax : 
    let variableName = function(parameters) {
    // Code to be executed
    return value; // Optional
    };

 */

let add = function (a, b) {
  return a + b;
};
// console.log(add(1,2));          // 3

/** 3. Arrow Function:-
    Arrow functions provide a concise way to write functions. 
    They are syntactically shorter and do not have their own this context.
    Syntax:
    let functionName = (parameters) => {
    // Code to be executed
    return value; // Optional
    };
 */

let multipy = (a, b) => {
  return a * b;
};
// console.log(multipy(3,4));       // 12

/**  4. Function Expression;-
        A function expression defines a function as part of a larger expression, such as a variable assignment.
 *      syntax :
        let variableName = function(parameters) {
                 // Code to be executed
                 return value; // Optional
            };

 */

let sayHello = function (name) {
  return `Hello, ${name}`;
};

// console.log(sayHello("rahul"))          // Hello, rahul

/** 5.Immediately Invoked Function Expression (IIFE)
     An IIFE is a function that is executed immediately after its definition.
     syntax :  
     (function() {
         // Code to be executed
      })();
     */

// (function(){
//     console.log(`This is IIFE`)
// })();

/** 6. Constructor Function:-
    Constructor functions are used to create objects.
    syntax:
    function FunctionName(parameters) {
    this.property = value;
    }

*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("ramesh", 23);
// console.log(person1);       // Person { name: 'ramesh', age: 23 }
// console.log(typeof person1);        // object

/** 7. Generator Function
 *   Generator functions produce an iterable object and allow pausing and resuming of execution.
 *   syntax : 
 * function* generatorFunction() {
    // Code to be executed
    yield value; // Pauses execution
    }
 */

function* countNumber() {
  yield 1;
  yield 2;
  yield 3;
}

let counter = countNumber();
// console.log(typeof counter);        // object

// console.log(counter.next().value);      // 1
// console.log(counter.next().value);      // 2
// console.log(counter.next().value);      // 3
// console.log(counter.next().value);      // undefined

/**  8. Default Parameters Function
        Functions with default parameters allow you to set default values for arguments.
        syntax : 
        function functionName(param1 = defaultValue) {
            // Code to be executed
            }
        */

function checkUser(username) {
  if (!username) {
    console.log("try something new !");
    return;
  }
  console.log(`Welcome, ${username}`);
}

// console.log(checkUser("Kashish"));      // Welcome, Kashish
// console.log(checkUser(""))                // try something new !

function checkUser1(username = "Unknown") {
  console.log(`Welcome, ${username}`);
}

// checkUser1();           // Welcome, Unknown
// checkUser1("")          // Welcome,
// checkUser1("ram")      // Welcome, ram

/**  9. Rest Parameters Function
        Rest parameters allow a function to accept an indefinite number of arguments.
        syntax : 

        function functionName(...parameters) {
             // Code to be executed
        }

*/

function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// console.log(sumAll(1,2,3));         // 6
// console.log(sumAll(10, 5, 2 , 3, 4 ));     // 24

/** return numbers.reduce((acc, num) => acc + num, 0);
 * The reduce() method in JavaScript is used to reduce an array to a single value by applying 
 * a callback function to each element in the array.
 * It takes two arguments:
        A callback function (acc, num).
        An initial value for the accumulator (0 in this case).
 * terms : 
 * acc : Accumulator : default value = 0
 * num : represents the current element
 * initail value is = 0
 */


/** 10. Callback Function
    A callback function is passed as an argument to another function and executed later.
    syntax : 
    function functionName(callback) {
        // Code to be executed
        callback(); // Executes the callback
    }

*/

function namasteBolo(name) {
  console.log(`Namastey!, ${name} ji`);
}

function processUserInput(callback) {
  let name = "Umesh Sharma";
  callback(name); // call the function
}

// processUserInput(namasteBolo);      // Namastey!, Umesh Sharma ji

/** 12. Recursive Function
    A recursive function calls itself until a base condition is met.
    syntax:
        function functionName(parameters) {
            if (baseCondition) {
                 return;
            }
            functionName(parameters);
        }

*/

function factorial(num) {
  // base condition
  if (num == 1) {
    return 1;
  }
  // recursive call
  return num * factorial(num - 1);
}

// console.log(factorial(5));      // 120
