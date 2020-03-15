var Employee1={
    EmployeeName:"Sait",
    EmployeeID:12,
    Salary : 100000

};
// everysingle  object key has to surrended in double quotes
console.log(Employee1);
console.log("=======================================");
console.log(Employee1.EmployeeName);//Sait
console.log("=======================================");

console.log(Employee1["EmployeeName"]);// sait  "EmployeeName is the key and in double quotes"
console.log("=======================================");

for(each  in Employee1){
    //each is employeeName and EmployeeID 
    console.log(each + " : " + Employee1 [each]);
};

console.log("============================");

var Employees ={
Mehmet:{
    Name:"Mehmet",
Salary: 120000
},
Shirin:{
    Name:"Shirin",
    Salary:130000
},
Tural:{
    Name:"Tual",
    Salary: 140000
}
};
console.log(Employees.Shirin);
console.log(Employees["Shirin"]);

console.log(Employees.Shirin.Salary);
console.log(Employees["Shirin"]["Salary"]);

