/**  Real World Example of an Object
 * 
 * In JavaScript, an object is a collection of key-value pairs, where:
 *  -> Key is the property name.
    -> Value is the data (any data type) that the property holds.

    Values can be:
    -> Primitive data types like numbers, strings, booleans, null, undefined, BigInt, and symbols.
    -> Non-primitive data types like other objects, arrays, dates, or functions.

    Imagine you are creating a profile for a person. A person's profile can include different types of information like their name, age, hobbies, and actions. 
    Here's how you can represent it as an object:
 */

// define an object
let personProfile = {
  // number property
  age: 28,

  // string property
  name: "Alok Singh",

  // boolean property
  isMarried: false,

  // null property
  spouse: null,

  // undefined property
  address: undefined,

  // Bigint property
  // bigNumber: 12345678901234567890n,

  // Symbol property
  uniqueId: Symbol("id123a"),

  // Array property
  hobbies: ["reading", "travelling", "coding"],

  // Object Property (Nested Object)
  eduction: {
    degree: "B.E.",
    collage: "ABC collage",
    year: 2024,
  },

  // Date property
  birthDate: new Date("04-09-2006"),

  // Function property (Method)
  greet: function () {
    console.log(`Hello, My name is ${this.name} and I love ${this.hobbies[0]}`);
  },
};


// Accessing the object properties
console.log("Name:", personProfile.name);
console.log("Age:", personProfile.age);
console.log("Date Of Birth:", personProfile.birthDate);
console.log("Married:", personProfile.isMarried);
console.log("Spouse:", personProfile.spouse);
console.log("Address:", personProfile.address);
console.log("Hobbies:", personProfile.hobbies[0]);
console.log("Degree:", personProfile.eduction?.degree);
console.log("Degree:", personProfile.eduction?.collage);
console.log("Degree:", personProfile.eduction?.year);
personProfile.greet();
