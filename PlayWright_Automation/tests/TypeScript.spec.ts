// TypeScript
function addition(a:number,b:number):number {
    return a+b; // Enforces number type
}

console.log(addition(10,25));
// console.log(addition(10,"25")); // Argument of type 'string' is not assignable to parameter of type 'number'.
