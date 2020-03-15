var car1={
    brand :"Mercides",
    mileage : 12340,
    year : 2020
}
var car2= {
    brand:"Toyota",
    mileage :150000,
    year:2020
}
function car(brand, mileage,year){
    this.brand= brand;// this refers to the object instances
    this.mileage;
    this.year;
}
var car3 = new car("Dodge" , 130000, 2020);

console.log(car3);

function Employee(Name, ID, Salary, SSN){
    this.Name= Name;
    this.ID=ID;
    this.SSN=SSN;
    this.Salary=Salary;
}
var employeeErhan = new Employee("ErhanHoly", 7, "123-123-123", 85000);
var employeeSumanya= new Employee("Sumanya", 8, "2343-444-334", 10000);

   console.log(employeeErhan);
   console.log(employeeSumanya);

   console.log(employeeSumanya("Name"));
   console.log( employeeErhan);



