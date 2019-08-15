

class Employee{
     
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    state: string;
    zip: string;
    occupation: string;
    hourlyWage: number;
    hours: number;
    cert:Array<string> = [];

     
    constructor(firstName: string,lastName: string,age: number,phoneNumber: number,state: string,zip: string,occupation: string,hourlyWage:number,hours:number){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.phoneNumber = phoneNumber;
            this.state = state;
            this.zip = zip;
            this.occupation = occupation;
            this.hourlyWage = hourlyWage;
            this.hours = hours;
    }
sayHello(firstName: string):string{
        return "Hello," + this.firstName;
    } 
  
fullName(firstName:string, lastName:string):string{
      return this.firstName + this.lastName;
  }

weeklyWage(hourlyWage: number, hours: number= 40):string{
      this.hourlyWage = hourlyWage;
      this.hours = hours;
      return String("You made"+ this.hourlyWage * this.hours +"this week !"); 
  }

  createEm(options:EmployeeOption){
      return new Employee( options.firstName,options.lastName,options.age,options.phoneNumber,options.state,options.zip,options.occupation,options.hourlyWage,options.hours)

  }
  addCerts(degree: string):string{
     this.cert.push(degree);
     return degree;
  }
}
interface EmployeeOption{
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: number;
    state?: string;
    zip?: string;
    occupation?: string;
    hourlyWage?: number;
    hours?: number;

}

let employee1 = new Employee("rashell","smith",24,8605736189,"ct",'06108',"student",40,60);
let interEmployee1 ={firstName: "secret", lastName: "assasin"}
let employee1a = employee1.createEm(interEmployee1);

document.getElementById("para").innerHTML = employee1.sayHello("Rashell");

document.getElementById("name").innerHTML = employee1.fullName("Rashell","Smith");

document.getElementById("hourlyWage").innerHTML = employee1.weeklyWage(50);

document.getElementById("certif").innerHTML = employee1.addCerts("masters");