const flag=true;

if (!flag) {
    console.log("Condition is satisfied")
} else {
    console.log("Condition is not satisfied")
}

let a=10
let b=10

if (a>b) {
    console.log("a is greater than b")
} else if(a==b){
    console.log("a and b are equal")
} else {
    console.log("a is less than b")
}

let x=1;
while(x<=10){
  console.log(x)
  x++
}

while(!true){
  console.log("i am inside loop")
}

let e=1;
do {
    console.log("i am inside do while oop")
    e++; 
} while (e<=10);

console.log("for loop starts..!")

for (let i = 0; i < 10; i++) {
    console.log("Iteration is : " + i)
}

console.log("for loop in reverse order starts..!")
for (let i = 10; i>=1; i--) {
    console.log("Reverse Iteration is : " + i)
}

for (let i = 0; i <= 10; i=i+2) {
    console.log("Iteration is : " + i)
}

console.log("for loop with break keyword..!")
for (let i = 0; i <= 10; i++) {
    console.log("Iteration is : " + i)
    if (i==6) {
        break
    }
   
}

console.log("for loop with continue keyword..!")
for (let i = 0; i <= 10; i++) {
    console.log("Iteration is : " + i)
    if (i==6) {
        continue
    }
   
}




