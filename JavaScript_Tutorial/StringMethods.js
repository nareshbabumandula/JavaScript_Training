// 1. Length of the string
let str = "Hello World";
console.log("Length of the string is : " + str.length);

// 2. Convert string to uppercase
let strName = "hello";
console.log(strName.toUpperCase());

// 3. Convert string to lowercase
let s="WORLD";
console.log(s.toLowerCase());

// 4. Find character at the specified index
console.log(str.charAt(0));

// 5. Find index of the specified character
console.log(str.indexOf('H'));

// 6. Check if the substring is available in the main string
let sText = "hello world welcome to javascript training..!"
console.log(sText.includes("javascript"));

// 7. Extract section of a string
console.log(sText.slice(0,5));
console.log(sText.slice(-11));

// 8. Extract section of a string but it does not accept negative indices
console.log(sText.substring(0,5));

// 9. Split a string into an array of substrings
let arrWords = sText.split(" ");
console.log(arrWords[0]);
console.log(arrWords[1]);
console.log(arrWords[2]);

// 10. Replace the first occurance of a subtring with a new value
console.log(sText.replace("to", "to the"));

// 11. Replace all occurances using regular expression
let e = "hello world welcome to javaScript world";
console.log(e.replace(/world/g, "everyone"));

// 12. concat one string with another string
console.log(e.concat(", " + "online training"));

// 13. includes - check if a substring is present in the main string
console.log(e.includes("javaScript"));

// 14. startsWith - check if a string startswith a specified character
console.log("startsWith res is : " + e.startsWith("hello"));

// 15. endsWith - check if a string startswith a specified character
console.log("endsWith res is : " + e.endsWith("WORLD".toLowerCase()));

// 16. repeat(count)
console.log(e.repeat(3));

// 17. match(regex)
console.log(e.match(/rld/g));

// 18. padStart(targetLength, padString)
let h="5";
console.log(h.padStart(5), "0");

// 19. padEnd(targetLength, padString)
let u="5";
console.log(u.padEnd(4, "0"));

// 20. toString -- converts a value to a string
let n=123;
let resultString = n.toString();
console.log(resultString);

console.log(1=='1'); // comparsion using the loose equality operator (==), which allows type coercion (convering
//one type of data into another type)

console.log(1==='1'); // comparsion using the strict equality operator (===), which does not allow type coercion (convering
//one type of data into another type)

let z=10+'50';
console.log(z);

let m = 10+parseInt('40'); // using parseInt()
console.log(m);

let p = 20+Number('70'); // using Number()
console.log(p);

let q = 30 + + '50'; // using unary plus (+)
console.log(q);

var x=null;
var y; // undefined
console.log(x===null);
console.log(y===undefined);

import Person from './Classes';

new Person("Sjoerd", "Jager");
person.fullName();