/*
while-loop: same with java
do-while
for-loop
for in loop
for of loop: 
break: exits the loop or switch statement
continue: skip the iteration


for in loop: execution is depends on the length of for in loop
*/


/*
var i=0;
while(i <=10){
    console.log(i);
i++;
}
*/

//-----------------------------

/*
for(var i=0; i<10; i++){
    console.log(i);
}
    var j=5;
    while(j>0){
       
        
        console.log(j);
        j--;
        
    }

    for(var i=0; i<10; i++){
        console.log(i);
    }
*/

var arr=[1,2,3,4,5,6,7,10.2];
//       0,1,2,3,4,5,6,7

// in for in loop application, first we provide name
//for (name in arr){ // name represents indx number then provide data collection(arr)
    
    for (name in arr){
    console.log(arr);
    
}

for(each in arr){ // prints each of the index number in this arr
    console.log(each);
}
console.log("==========================");


// For in loop
var strArray =["Madina", "Waris","Ruhan", "shirin", "turgunjan"];
for(anyName in strArray ){
console.log(anyName);// it returns index number of each element in arr

}

// for of loop
for(anyName in strArray ){
console.log(strArray [anyName]);

}

console.log("==========================");
 

for(var i=0; i<strArray.length; i++ ){
     console.log(strArray[i]);
 }