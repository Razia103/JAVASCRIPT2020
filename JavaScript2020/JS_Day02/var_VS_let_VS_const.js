/*
var vs let vs const:
var vs let;
var: variable name does not have to be unique
let:variable name must be unique, if it's decleared within block we cannot access it
const: final variable
*/
var a =100;
var a="Muhtar";
console.log(a);

let b="Marufjon";
console.log(b);

console.log("====================");
if(true){
    var i=100;

}
console.log(z);// var can never be local variable, can declear within the block
for(let z=o; z>=9; z++){

}console.log(z);

const str = "Cybertek school";
const gender="Female";
   //gender="Male"; it dos not complie, constant variable cannot be changed 
console.log(gender);