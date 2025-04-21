
// A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student freom the bus.

//Problem Statement: Create a function taht remvoe the first student from the bus and returns the updated list.

function removeStudent(bus){
    bus.pop()
    return bus
}
const busList =removeStudent(["John", "Sarah","Mike", "Emma"])
console.log(busList)

