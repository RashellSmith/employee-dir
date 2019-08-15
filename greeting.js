var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zip, occupation, hourlyWage, hours) {
        this.cert = [];
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
    Employee.prototype.sayHello = function (firstName) {
        return "Hello," + this.firstName;
    };
    Employee.prototype.fullName = function (firstName, lastName) {
        return this.firstName + this.lastName;
    };
    Employee.prototype.weeklyWage = function (hourlyWage, hours) {
        if (hours === void 0) { hours = 40; }
        this.hourlyWage = hourlyWage;
        this.hours = hours;
        return String("You made" + this.hourlyWage * this.hours + "this week !");
    };
    Employee.prototype.createEm = function (options) {
        return new Employee(options.firstName, options.lastName, options.age, options.phoneNumber, options.state, options.zip, options.occupation, options.hourlyWage, options.hours);
    };
    Employee.prototype.addCerts = function (degree) {
        this.cert.push(degree);
        return degree;
    };
    return Employee;
}());
var employee1 = new Employee("rashell", "smith", 24, 8605736189, "ct", '06108', "student", 40, 60);
var interEmployee1 = { firstName: "secret", lastName: "assasin" };
var employee1a = employee1.createEm(interEmployee1);
document.getElementById("para").innerHTML = employee1.sayHello("Rashell");
document.getElementById("name").innerHTML = employee1.fullName("Rashell", "Smith");
document.getElementById("hourlyWage").innerHTML = employee1.weeklyWage(50);
document.getElementById("certif").innerHTML = employee1.addCerts("masters");
