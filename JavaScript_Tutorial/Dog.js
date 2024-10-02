const Pet = require('./Pet')
class Dog extends Pet {
   
    constructor(name, breed){
        super(name); // calls the constructor of the parent class
        this.breed=breed;
    }

    bark(){
        console.log(this.name + ' can bark..!'); 
    }

}

let dog = new Dog("Pillu", "German Shepard");
dog.walk();
dog.run();
dog.bark();
dog.noise();
console.log(dog.breed + ' is the breed..!');
