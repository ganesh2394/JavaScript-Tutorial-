// Object Creation

// Way-01 : Using Literals
const person = {
  name: "rahul",
  age: 28,
  isStudent: true,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

// console.log(person.name);
// person.greet();
// console.log(person);

// Way-02 : Using new Object() constructor
const book = new Object();
book.title = "JavaScript tutorial";
book.author = "Nitesh Kumar";
book.pages = 223;
// console.log(book);

// Way-03 : Using Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Harish", 33);
const person2 = new Person("Roshan", 34);

// console.log(person1);
// console.log(person2);

// Way-4 : Using Classes (ES6 Feature)
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  sound() {
    console.log(`${this.name} make a sound`);
  }
}

const dog = new Animal("Dog", "Mammal");
// dog.sound();         // Dog make a sound

// Accessing Properties

// Way-01 : using dot notation
// console.log(person.name);       // rahul
// console.log(person.age);        // 28

// Way-02 : using bracket notation
// console.log(person["name"]);        // rahul
// console.log(person["age"]);         // 28

/** Modifying Objects
    You can add, update, or delete properties dynamically.
 */

const car = {
  brand: "Toyota",
};
// console.log(car); // { brand: 'Toyota' }

// add model
car.model = "Camry";
// console.log(car); // { brand: 'Toyota', model: 'Camry' }

// update model
car.model = "Corolla";
// console.log(car); // { brand: 'Toyota', model: 'Corolla' }

// delete model
delete car.model;
// console.log(car); // { brand: 'Toyota' }

// Iterating Over Object Properties

const p1 = {
  name: "ram kumar",
  age: 26,
  location: "indore",
};
// 1. Using for...in Loop
// for(let key in p1){
//      console.log(key + ": "+ p1[key]);
// }

// 2. Using Object.keys()
console.log(Object.keys(p1)); // [ 'name', 'age', 'location' ]

// 3. Using Object.values()
console.log(Object.values(p1)); // [ 'ram kumar', 26, 'indore' ]

// 4. Using Object.entries()
console.log(Object.entries(p1)); // [ [ 'name', 'ram kumar' ], [ 'age', 26 ], [ 'location', 'indore' ] ]
