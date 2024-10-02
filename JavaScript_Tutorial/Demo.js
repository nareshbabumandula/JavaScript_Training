console.log("Before importing Person");
const Person = require('./Person');
console.log("After importing Person");

let person = new Person("Sjoerd", "Jager");
person.fullName();
console.log(person.age);