// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

    let teas = {
        name: "Lemon tea",
        type: "Green",
        caffine: "Low"
    }

// Problem: Access and print the name and type properties of the tea object.

    console.log(teas.name)
    console.log(teas["type"])

// Problem: Add a new property origin to the tea object.

    teas.origin = "Assam"

// Problem: Change the caffeine level of the tea object to "Medium".

    teas.caffine = "Medium"

// Problem: Remove the type property fromt eh tea object.

    delete teas.type

// Problem: Check if the tea object  has a property origine.

    console.log("origin" in teas)

// Problem: Use a for....in loop to print all properties of the tea object.

    for(let key in teas){
        console.log(key + ": " + teas[key]);
    }

// Problem: Create a nested object representing different type of teas and their properties.
const myTeas = {
    greenTea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black tea"
    }
}

// Problem: Create a copy of the tea object.

const teaCopy =  {...teas}      // shallow copy
const anotherCopy = teas   // reference

teaCopy.greenTea.name = "Jiturajsharma"

