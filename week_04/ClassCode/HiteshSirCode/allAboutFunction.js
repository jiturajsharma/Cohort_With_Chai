Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function masalaChai(){}
function gingerChai(){}

function greet(name){
    return `Hello ${name}`
}

greet()

greet.describe('hiteshsir')
masalaChai.describe()

function add(a,b){
    return a+b
}

const substract = function(a,b){
    return a-b
}

const multiply = (a,b) => a* b

function applyOperation(a,b, operation){
    return operation(a,b)
}

const result = applyOperation(5, 4, (x,y) => x/y)

// function oneOf(){
//     let myName = "Jiturajsharma"
// }
// console.log(myName);    ishme scoping ka problem hai 


function createCount(){
    let count = 0
    return function(){
        count++;
        return count
    }
}
// console.log(count)

const counter = createCount()
console.log(counter())

(function(){
    console.log("jiturajsharma")
})()

()()

(function(){

})()