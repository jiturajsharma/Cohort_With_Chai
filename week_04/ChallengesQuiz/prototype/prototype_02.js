/*
Problem Statement

You are designing a simple robot system. Each robot has a name add a batteryLevel. The robot should have a method charge() that increases the battery level by 20, but it cannot exceed 100.


Challenge:
    * Implement a constructor function Robvot that initializes name and batteryLevel
    * Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100
*/


// You need to implement the robot constructor function and its prototype method

function Robot(name, batteryLevel){
    this.name = name
    this.batteryLevel = batteryLevel
}
console.log(Robot(this.name))

// Define charge method on Robot's prototypes
Robot.prototype.charge = function(){
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100)
}
