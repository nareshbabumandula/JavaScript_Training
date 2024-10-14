// ECMA Script 6 : ES6 Features

// 1. let and const

let x=10;

if(true){
    let x=20; // blocked scope
    console.log(x); // output: 20
}
console.log(x); // output : 10

const y=30;
console.log(y); // output 30
//y=40; // TypeError: Assignment to constant variable.

// 2. Arrow Functions : Gives concise way of writing function expressions

function addition(a,b){
    return a+b;
}

console.log(addition(4,8));

const res = (a,b)=>a+b;
console.log(res(3,6));

// 3. Template Literals : Template literals allow us to use embed variables inside strings using backticks (`) and ${} for interpolation

const name ='naresh';
const age =40;

const message = `Hello, my name is ${name}, and my age is ${age}`;
console.log(message);

// 4. Default Parameters: We can set the default values for function parameters, if no value is set or undefined is passed

function greet(name='John'){
    console.log(`Hello, ${name}..!`);
}
greet('Alex');
greet();

// 5. Destructuring Assignment: It will extract values from arrays or objects into distinct variables

const arr = [1,2,3];
const [first, second]=arr;

console.log(first); // 1
console.log(second); // 2
//console.log(third); // ReferenceError: third is not defined

const person = {pname:'Pete',page:30};
const{pname,page}=person;
console.log(pname);
console.log(page);

// 6. Rest and Spread Operators

// Rest Operator(...): Gathers the remaining arguments into an array
function sum(...numbers){
    return numbers.reduce((acc, curr)=>acc+curr,0);
}
console.log(sum(1,2,3,4,5));

// Spread Operator(...): Expands an array or object into individual elements
const arr1=[1,2];
const arr2=[3,4];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// 7. Classes : ES6 introduced class syntax, which provides a simpler and cleaner way to create constructor functions and handle inheritance

class Person{
    
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
    
}

//const person = new Person('Alex', 40);
// person.greet();
const p = new Person('Gena', 50);
p.greet();

// 8. Modules: ES6 allows JavaScript code to be split into modules using import andd export. This enables code re-usability
// file name is math.js
//export const add = (a,b)=>a+b;
//export const subtract = (a,b)=>a-b;

// file test.js
// import {add, subtract} from './math.js';
// console.log(add(4,6));
// console.log(subtract(8,3));

// 9. for...of Loop

// The for...of loop allows us to iterate over iterable objects (like arrays, strings, etc) in a simple manner

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for(const day of days){
    console.log(day);
}

// 10. Map and Set
// ES6 introduced new data structures like Map and Set
// Map: A collection of key-value pairs, where keys can be of any type
// Set: A collection of unique values

const map = new Map();
map.set('name','Sjoerd');
map.set('company','avanade');
map.set('empID',1234);

console.log(map.get('name'));
console.log(map.get('company'));
console.log(map.get('empID'));

const set = new Set([1,2,4,7,3,1]);
console.log(set.size);
console.log(set.has(2));
console.log(set);









