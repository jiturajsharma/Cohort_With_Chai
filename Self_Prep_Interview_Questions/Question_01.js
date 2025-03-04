// What are the Possible ways to create objects in Javascript
// -> There are many way to create objects in javascript 

// * Object constructor:
// -> The Simplest way to create an empty object is using the Object Constructor. Currenty this approach is not recommended.
var object1 = new Object();
// console.log(object1)



// * Object's create method:
// -> The create method of Object creates a new object by passing the prototype object as a parameter.
var object2 = Object.create(null);
// console.log(object2)



// * Object Literal syntax:
// -> The object literal syntax is equivalent to create method when it passes null as parameter.
let object3 = {};
// console.log(object3)




// * Function constructor:
// Create any function and apply the new operator to create object instances,
function Person(name){
    let object = {};
    object.name = name;
    object.age = 21;
    return object;
}
let object = new Person("jiturajsharma")
// console.log(object)




// * Function constructor with prototype:
// This is similar to function constructor but it uses prototype for their properties and methods,

function Person(){
    Person.prototype.name = "Jiturajsharma";
    let object5 = new Person();
}

// This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.
function func() {}; 
new func(x, y, z);
//                                  OR
// Create a new instance using function prototype.
let newInstance = Object.create(func.prototype)

// Call the function var result 
func.call(newInstance, x, y, z)
// if the result is a non-null object then use it otherwise just use the new instance 
console.log(result && typeof result === 'object' ? result: newInstance);


// * Singleton Pattern
// -> A singleton is an obnject which can only be instantaited one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
let object6 = new function(){
    this.name = "Jiturajsharma";
}


