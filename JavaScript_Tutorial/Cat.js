const Pet = require('./Pet')
class Cat extends Pet{
 
   constructor(name){
      super(name);
   }

   drink(){
      console.log(this.name + ' can drink water and milk');
   }
}

const cat = new Cat("Tim");
cat.drink();
cat.walk();
cat.run();
cat.noise();


