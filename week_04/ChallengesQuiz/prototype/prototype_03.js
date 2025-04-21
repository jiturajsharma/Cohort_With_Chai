/*
Problem Statement

You need to create a Counter constructor function that initializes a count property to 0. The counter should have two prototypes methods.

        * increase() increase the count by 1.
        * decrement() decreases the count by 1.
    

Challenge
    *Implement a constructor function Counter that initializes count by 0
    * Attach increment() and decrement() methods to the prototype.
*/




// You need to implement the Counter constructor function and its prototypes methods

function Counter(){
    this.count = 0
}

// Define increment method on Counter's prototye
Counter.prototype.increment = function(){
    this.count +=1;
}

// Define decrement method on Counter's prototype 
Counter.prototype.decrement = function(){
    this.count -=1;
}
