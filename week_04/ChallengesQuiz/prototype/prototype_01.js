// Problem Statement
/*
You need to create constructor function Animla that takes a name parameter. Add a method makeSound to its prototypes, which always returns "Some Generic sound."


Challenge
        * Implement a constructor function Animal that initializes the name property.
        *Attach a method makeSound to its prototypes that return "Some generic sound"
*/ 



// You need to implement the Animal constructor function and its prototypes method

function Animal(name){
    this.name = name // initialize name property
}

// Define makeSound method on Animal's prototype

Animal.prototype.makeSound = function(){
    return "Some generic sound"
}

console.log(raj)

