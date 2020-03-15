/*
if statment: 100% same with java
ternary: 100% same  

switch statment: 85% same with java

*/
if(9>10){
    console.log("Hello ");
}else if(11>12){
    console.log("ciao");
}
else{
        console.log("Hola");
    }
    console.log("=====================");
var str=(9>10) ? "Hello":(11>12)?"ciao" :"Hola";
console.log(str +"==============");

var bool= 5.5;
switch(bool){   // accepts any data types
    case true:
        console.log("true");
            break;
        case 5.5:
            console.log("False");
            break;
         default:
                console.log("Maybe");
}
