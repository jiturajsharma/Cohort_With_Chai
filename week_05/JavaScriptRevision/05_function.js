function greet(name){
    console.log(`Hello ${name}`)
}

// greet("Jiturajsharma");
// greet("sharma")

let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "I am modified";
    let blockScopedVar = "I am backed-scoped";
    console.log(blockScopedVar)
}

// modifyGlobal()

let config = (function() {
    let settings = {
        theme: "dark",
    };
    return settings
})();

let person1 = {
    personsName:"raj",
    greet: function(){
        console.log(`Hello, ${this.personsName}`);
    }
}

let person2 = {
    personsName: "Hiteshsir",
}

person1.greet.call(person2)