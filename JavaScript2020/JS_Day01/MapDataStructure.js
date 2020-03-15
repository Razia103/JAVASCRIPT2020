var map= new Map();  // map in java  is key and value format,   same in js
/*
set(key, value): add keys and values to the map
get(key):returns the value
delete(key): dele the key and value
has(key): verifies 

keys():returns all the keys
values(): returns all the values
*/ 
map.set("Madina", 120000);
map.set("Turhunjan", 100000);
console.log(map);
/*
if we declear more then one loop, we have to declear with  for of loop.
for of loop:

for(var[X,Y]  of  mapName)
*/
for( var [key,value] of map){
    console.log(key+ " salary is " + value + " dollars");
}

// js is case sensitive language, 
console.log( map.get("Madina")); // returns salary of madina

map.delete("Madina");
console.log(map);

/*

keys():returns all the keys
values(): returns all the values

*/
var students = new Map();
students.set("Nurzat", 1);
students.set("Olessiya", 2);
students.set("Holy Erhan", 3);

for(var key of  students.keys()){
    console.log(key);
}
 console.log("===========================");

 for(var value of students.values()){
     console.log(value);
 }