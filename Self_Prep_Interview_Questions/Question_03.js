// What is the difference between Call, Apply and Bind
// -> The difference between Call, Apply, and Bind can be explained 

// Call -> The call() method invokes a function with a given this value and arguments provided one by one

let employee1 = {
    firstName: "jitu",
    lastName: "Sharma"
};
let employee2 = {
    firstName: "Sharma",
    lastName: "Jitu"
}

function invite(greeting1, greeting2){
    console.log(greeting1 + ' '+ this.firstName + ' ' + this.lastName+ ', ' + greeting2)
}
invite.call(employee1, "Hello", "How are you?");
invite.call(employee2, "Hellow", "How are you");


// Apply:- Invokes the function with a given this value and allows you to pass in arguments as an array
let employee3 = {
    firstName: "jitu",
    lastName: "G"
}
let employee4 = {
    firstName: "Mahesh",
    lastName: "Soni"
}

function invite(greeting1, greeting2){
    console.log(greeting1 + " "+ this.firstName + " "+ this.lastName + ", "+ greeting2)
}
invite.apply(employee3, ['Hello', 'How are you?'])
invite.apply(employee4, ['Hello', 'How are you?'])

// Call can apply are pretty intrerchangable. Both execute the current function immediately. Yo need to decide whether it's easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma(spreated list) and apply is for array.
// Whereas Bind creates a new function that will have this set to the first parameter passed to bind()

