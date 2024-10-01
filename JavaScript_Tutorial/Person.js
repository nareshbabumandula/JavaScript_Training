class Person{
    age=30;

    //location='India';
    get location(){
        return "India";
    }

    // parameterized constructor with the parameters firstName, lastName
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
  
    fullName(){
        console.log(this.firstName + " " + this.lastName);
    }

}
// Constructor is a method which executes by default when we created object of the class
let person = new Person("Sean", "Jurebie");
console.log(person.age);
console.log(person.location);
person.fullName();
let person1 = new Person("Naresh", "Mandula");
person1.fullName();


module.exports=Person;