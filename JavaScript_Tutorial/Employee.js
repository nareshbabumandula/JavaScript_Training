/**
 * Encapsulation: Bundling of data (variables) and methods within an object is called as encapsultion
 *  
 */
class Employee {
  #salary; // private field
  
  // Getter to access the private variable
  getSalary(){
     return this.#salary;
  }

  // Setter to modify the private variable
  setSalary(newSalary){
     if(newSalary>0){
        this.#salary=newSalary;
     }else{
        console.log('Invalid Salary..!');
     }
  }
  constructor(name, salary){
    this.name=name;
    this.#salary=salary; // initialize the private field
  }

}

emp = new Employee("Naresh", 80000);
console.log(emp.getSalary()); // Accessing private field via getter method

emp.setSalary(50000);
console.log(emp.getSalary()); // Accessing private field via getter method
emp.getDefaultSalary();
//console.log(emp.#salary); // Syntax error: Private field '#salary' must be declared in an enclosing class



