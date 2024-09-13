console.log("Hello World..!")

// comments

/*
this
is
javaScript
*/

// In JavaScript variables are loosly coupled. It means varibles in JavaScipt can hold any type of data (integer, float, double, boolean, string, char, byte, short etc)
// In JavaScipt we need to define the datatype explicitly. JavaScipt inbuilt will take care of evaluting the datatype implictly
// JavaScipt language is case sensitive
// In JavaScipt there is no need of using semicolon at the end of each line statement

/*
In JavaScript both let and var are used to declare variables, but they differ interms of scope, hoisting, re-assignment etc.
var:
1. Scope: If we declare a variable inside a function using var, it's only accessible within that function
2. Hoisting: Hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compile phase.
3. Re-declaration: We can re-declare a var variable within the same scope without any errors.

let:
1. Scope: Variables declared with let will have block-scopped. If means if we declare a variable inside a block (if, else, loop or function). It will be only accessible within that block
2. Hoisting: let is also hoisted, but it enters a temporary dead zone. It means while the variable declaration os hoisted, it cannot be accessed until the actual line of declaration is reached
3. Re-declaration: We cannot re-declare a let variable within the same scope.

*/

function addition() {
    var a=10; 
    var b=20;
    var c=a+b
    console.log("Addition of a and b is : " + c);
}

function hoistingExample(){
    console.log(x); // output: undefined (due to hoisting)
    var x=40; // declaraion and initialization of 'x'
    console.log(x); // output: 40
}
addition(); // function call
hoistingExample(); // function call

var e = 1;
var e = 2; // no error
console.log("Value of the e is : " + e);

function lethoistingExample(){
    //console.log(y); // output: Reference error: Cannot access 'y' before initialization
    let y=30; // declaraion and initialization of 'y'
    console.log(y); // output: 30
}

lethoistingExample(); // funtion call

if (true) {
    let f=100;
} 

//console.log("let variable 'f' value is : " +f); // ReferenceError: f is not defined

a=10;
str="John"
b=true;
console.log(a)
console.log(str)
console.log(b)
console.log(!b)

var x=5; // In JavaScript we use a keyword called var to store a value in a variable. Recently (let and const) varibles were also inrtoduced from ES6 version onwards
let c=6;
console.log(x)
console.log(c)
let d=243.23345

// To check the type of the data we have a keyword called typeof(variable)
console.log(typeof(x))
console.log(typeof(str))
console.log(typeof(b))
console.log("Type of d is : " + typeof(d))
console.log("Hello " + " World")

// null and undefined

// Assigment operators
let a1=20
let b1=10
console.log("Addition output is : " + (a1+b1))
console.log("Subtraction output is : " +  (a1-b1))
console.log("Multiplication output is : " +  (a1*b1))
console.log("Division output is : " +  (a1/b1))
console.log("Modulus output is : " + (a1%b1))

for (let i = 0; i <= 100; i++) {
    if (i%2==0) {
        console.log(i + " : is an even number")
    } else {
        console.log(i + " : is an odd number")
    }
}

sText="Peter"
var asText = "Pete"
let s = "Alex";
console.log(s.toUpperCase())
let aText = "                Pavan Kalyan    "
console.log(aText)
console.log(aText.trim())
console.log("JavaScript basics..!")











