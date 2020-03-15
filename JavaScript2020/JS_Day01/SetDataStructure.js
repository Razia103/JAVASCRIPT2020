var set = new Set();
/*
set variable: in JS
add(values): add the value to the set
delete(value) method: deletes the value 
clear() method: clears everything  
has(value): returns the boolean , contains 


*/
set.add(10);//set dose not except similarity

set.add(10);

set.add("Yusuf", "Mizgin", "Mehmet");// it adds one by one 
set.add("Mizgin");
set.add('@');
set.add(true);
console.log(set); // we can add string to set value

set.delete(10);
console.log(set);

set.clear();
console.log(set);

var boolean= set.has("Mizgin");
console.log(boolean);// it returns false, coz we cleared the all values 

console.log("================================");

/*
for of loop:
for(var varName  of  set.values())  , first declare a variable
*/
//var set = new set();

for(var each of set.values()){
    console.log(each);
}
console.log("+====================");

var students = ["Nurullah", "Shirin", "Sukran"];
for (var eachStudent  of students.values()){
    console.log(eachStudent);
}

//  for of loop :returns the value,  for in loop: returns the index