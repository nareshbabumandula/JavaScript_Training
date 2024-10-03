class Bird{
   speak(){
        console.log('The bird makes a sound..!');
    }

    walk(){
        console.log('Bird can walk..!')
    }
}

class Parrot extends Bird{
    speak(){
        console.log('The parrot can speak...!');
    }

    walk(){
        console.log('Parrot can walk..!')
    }
}

class Crow extends Bird{
    speak(){
        console.log('The crow can make noise...!');
    }
}

let birds = [new Bird(), new Parrot(), new Crow()];

birds.forEach(bird => {
    bird.speak();
});

let parrot = new Parrot();
parrot.walk();


