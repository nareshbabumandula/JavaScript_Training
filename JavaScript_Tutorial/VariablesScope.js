// block of code
// var - scope of the var keyword is global if it is defined globally and local if it is defined inside a function
// let -- global level/block levbel {}

var message="morning";
console.log(message);

if(1==1){
    var message = "afternoon"; // defined inside the if block
}

function greet() {   
    var message="morning"; // var defined locally (inside a function)
    console.log(message + " inside the function");
}
greet();
//console.log(message);
console.log(message + " outside the function");

let str="hello";
console.log(str);

if(1==1){
    let str = "hi"; // defined inside the if block
    console.log(str + " : inside the block..!");
}
console.log(str);


