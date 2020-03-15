var number =[1,2,3,3.5, "Muhtar", true, '#'];// in java script we can save decimal and string  but not in the java
// index:    0 1 2 3     4        5      6
console.log(number);
console.log(number[5]);
console.log(number[10]);// is undefined and considerd as datatype in javascript 
var name1=number[4];
console.log(name1);

/*

sort(): sorts in accending
push(value): add method
pop(): LIFO: last in first out 
Shift(): FIFO :1st in 1st out
unshift(value):inserts the vaue to index 0
length: returns the length

*/
var nums=[9,8,7,6,5,4,3,2,1];
nums.sort();// ascii table 

 nums.push(100);
console.log(nums);
console.log(nums.pop());

console.log(nums.shift());
console.log(nums);

nums.unshift(1);
console.log(nums);


console.log(nums.length);