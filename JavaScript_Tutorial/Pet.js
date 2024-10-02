class Pet {

    constructor(name){
       this.name=name; 
    }

    walk(){
        console.log(this.name + ' can walk');
    }

    run(){
        console.log(this.name + ' can run');
    }

    noise(){
        console.log(this.name + ' can make noise');
    }


}
module.exports=Pet; // Export the class explicitly