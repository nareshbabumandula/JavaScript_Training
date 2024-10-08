// object is a collection of properties
let person={
    firstName:'Pete',
    lastName:'Oberlander',
    age:30,

    fullName : function(){
      console.log(this.firstName+ " " + this.lastName);
    }
}

// acessing the properties with dot notation
console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);


// acessing the properties with array notation
console.log(person['firstName']);
console.log(person['lastName']);

// update the properties
person.firstName="Sean";
console.log(person.firstName);

// add the property
person.gender='male';
console.log(person.gender);

// delete the property
delete person.gender;
console.log(person.gender);

// check the property exists or not
console.log('firstName' in person);
console.log('gender' in person);

// access all the properties of an object and print them
for(let key in person){
    console.log(key + "=" + person[key]);
}






