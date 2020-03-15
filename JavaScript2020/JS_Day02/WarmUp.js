/*




*/
function plainDromTest() {
    var  result = "";
    if(typrof str == "String"){
 for(var i=str.length -1 ; i>=0 ; i--){
     result = result.concat(str.CharAt(i));
 }
if(result == str){
    return true;
}
}
return false;
}

    console.log(plainDromeTest("anasta mum satsana) );
    console.log(plainDromTest("Cybertek"));
    console.log(plainDromeTest(123));
// remove the duplicates 
//"AAABBBCCC"==."ABC"
function removeDuplicates(str){
    var nonDuplicates =0;
    if(typeof str=="string"){

        for(var i=0; i<str.length; i++){
            if(nonDuplicates.includes(str.CharAt(i))){
                nonDuplicates=nonDuplicates.concat(str.CharAt(i));

            }
            }
        }

        console.log(nonDuplicates);
    }
RemoveDuplicates("AAABBBCCC");
