/**                 JavaScript JSON Objects
 * 
 * JSON (JavaScript Object Notation) is a lightweight data format used for exchanging data between 
 * a server and a client or between different parts of an application. 
 * JSON is derived from JavaScript but is language-independent, meaning it can be used in many programming languages.
    In JavaScript, JSON objects are simply text formatted as key-value pairs, resembling 
    JavaScript objects. However, there are some important distinctions between JSON and JavaScript objects.
 * 

    Key Features :-
    1. Key-Value Pairs: JSON is composed of key-value pairs.
    2. String Keys: Keys in JSON must be strings, enclosed in double quotes (").
    3. Lightweight: JSON is text-based and easy to read/write.
    4. Data Types Supported:
        Strings
        Numbers
        Booleans (true and false)
        Null
        Arrays
        Nested JSON objects
 */

// How to Use JSON in JavaScript : JSON objects are written in a specific format and can represent data.

let jsonData = {
  name: "Amar",
  age: 24,
  isStudent: true,
  skills: ["Javascript", "java", "python"],
  address: {
    city: "delhi",
    zipcode: "14521",
  },
  graduationYear: null,
};

// Accessing JSON data : Use dot notation (.) or bracket notation ([]) to access JSON properties.

// console.log(jsonData.name);
// console.log(jsonData[age])      //  Error : ReferenceError: age is not defined
// console.log(jsonData["age"]);

// ## Stringifying JSON (Convert JSON Object to String)
// Use JSON.stringify() to convert a JSON object into a string, useful for sending data to a server.

let jsonString = JSON.stringify(jsonData);
let json_name_string = JSON.stringify(jsonData.name);

// console.log(json_name_string);      // "Amar"
// console.log(jsonData);
// console.log(jsonString);

/** 
 * output 1:-
 * {
  name: 'Amar',
  age: 24,
  isStudent: true,
  skills: [ 'Javascript', 'java', 'python' ],
  address: { city: 'delhi', zipcode: '14521' },
  graduationYear: null
}

output 2:-
{"name":"Amar","age":24,"isStudent":true,"skills":["Javascript","java","python"],"address":{"city":"delhi","zipcode":"14521"},"graduationYear":null}
 */

// ## Parsing JSON (Convert JSON String to Object)
// Use JSON.parse() to convert a JSON string back into a JavaScript object, useful for receiving data from a server.

let parsedData = JSON.parse(jsonString);
console.log(parsedData);

/**  
 * output : 
 * {
  name: 'Amar',
  age: 24,
  isStudent: true,
  skills: [ 'Javascript', 'java', 'python' ],
  address: { city: 'delhi', zipcode: '14521' },
  graduationYear: null
}

 */
