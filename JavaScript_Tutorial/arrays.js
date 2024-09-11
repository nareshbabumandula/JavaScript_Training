// In JavaScipt arrays are dynamic in nature. It means the array is not strictly enforced even if we initialize an array with fixed size. Here it creates an array with an initial
// size of 2, but we can still add or modify element byound the specified size.

// Norte: JavaScript does not throw expcetion when we assign values to indexes beyond the initial size.

var marks = Array(2) // marks array with a fixed size of 3 elements
marks[0]=11
marks[1]=22
marks[2]=33
marks[3]=44 

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
let score = new Array(10,20,35,45,55) // array

console.log("Array as list..!")
var nums=[10,30,40,50,65] // Array literal to store multiple values
console.log(nums.lastIndexOf(10))
console.log(nums) // [ 10, 30, 40, 50, 65 ]
console.log(nums[1])
console.log(nums.length)
nums.push(82) // adds element as head on top of the array
console.log(nums) // [ 10, 30, 40, 50, 65, 82 ]
console.log(nums.length)
nums.pop() // removes the head element from an array follows LIFO 
console.log(nums) 
nums.unshift(5)
console.log(nums)
console.log("Found index "+ nums.findIndex(num=>num>10));
console.log(nums.lastIndexOf(10))
console.log(nums.includes(50))
console.log(nums.slice(1,4))

for (let i = 0; i < score.length; i++) {
    console.log(score[i])   
}
let sum=0;
for (let i = 0; i < score.length; i++) {
    sum=sum+score[i]
}
console.log(sum)



