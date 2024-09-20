var arr = new Array(10,90,60,20,30,50,80);
console.log(arr[0]);
console.log(arr.slice(-2,10));

var sum=0;
for (let i = 0; i < arr.length; i++) {
    sum=sum+arr[i];
}
console.log("Sum of array is : " +sum);

// sorting in ascending
let score = [15,92,65,20,35,50,80];
score.sort();
console.log(score);

// sorting in descending
const nums = [1,4,8,3,2,5,7,6];
nums.sort((a, b) => b-a);
console.log(nums);

let names = ["Uday", "Srikanth", "Balu", "Naresh", "Ramu", "Santhosh", "Krishna"];
names.sort();
console.log(names);


let marks = Array(15,92,65,20,35,50,80);
console.log(marks[0]);
console.log("No of elements are : " + marks.length);


for (let i = 0; i < marks.length; i++) {
  for (let j = 0; j < marks.length-1; j++) {
     if (marks[j]>marks[j+1]) {
        //swapping
        let temp=marks[j];
        marks[j]=marks[j+1];
        marks[j+1]=temp;
     }
  }
}

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}


let n=5; // output : factorial of n -> 5*4*3*2*1 =120
let fact=1;
for (let i = 1; i<=n; i++) {
   fact*=i;
}
console.log("Factorial result is : " + fact);


//reduce filter map
console.log(arr.reduce((sum,totalScore)=>sum+totalScore,0));
