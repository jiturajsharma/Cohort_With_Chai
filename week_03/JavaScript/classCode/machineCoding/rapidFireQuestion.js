// problem: create an array containing different types of teas.
const teas = ["Green Tea", "black Tea", 'oolong tea', 'white tea', 'herbal tea']
console.log(teas)

// problem: add "Chamonile Tea" to the existing list of teas.
teas.push("Chamoile Teas")

// problem: Remove "oolong Tea" from the list of teas.
const index = teas.indexOf("oolong tea");
console.log(index)
if(index > -1){
    teas.slice(index, 1);
}

// Problem: filter the list to only include teas that are cafffineated
const caffinatedTeas = teas.filter(tea => tea !="Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
const test = ["jitu", "raj", "sharma"]
console.log(test)

// Problem: use a for loop to rint each type of tea in the array.
for(let i =0; i<teas.length; i++){
    console.log(teas)
}

// problem: use a for loop to count how many teas are caffeinated(excluding "Herbal Tea")
let caffinatedMyTeas = 0;
for(let i =0; teas.length; i++){
    if(teas[i] !== "Herbal Teas"){
        caffinatedMyTeas++
    }
}

// problem: Use a for loop to create a new array with all tea names in uppercase.
const uppcaseTes = []
for(let i=0; i<tea.length;i++){
    uppcaseTes.push(teas[i].toUpperCase())
}

// Problem: Use a for loop to find the teas name with the most characters.
let longestTea = "";
for(let i = 0; teas.length;i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]
    }
}

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedArray = []
for(let i = teas.length -1; i >= 0; i--){
    reversedArray.push(teas[i])
}
