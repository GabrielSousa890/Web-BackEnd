function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.genderP = "N/A";

Person.prototype.greet = function(){
    console.log("Hello "+ this.firstName + " " + this.lastName + " " + this.age);
}

var p1 = new Person("David", "Jardim", 23);
var p2 = new Person("Maria", "Pontes", 19);
var p3 = p1;
var p4 = new Person("Maria", "Pontes", 19);

console.log(p1 == p3);
console.log(p2 == p1);
console.log(p2 == p4);

p1.genderP = "M";
p2.genderP = "F";

p1.greet();
p2.greet();

console.log(p1.__proto__);
console.log(p2.__proto__);