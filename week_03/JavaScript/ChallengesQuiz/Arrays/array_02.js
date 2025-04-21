// You have a jar full of condies, but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.

//Problem Statement: Create function that removes the last candy from the jar and returns the updated jar.

function eatCandy(candyJar){
    candyJar.pop();
    return candyJar
}
const CandyList =eatCandy(["Lollipop", "Gum", "Chocolate"])
console.log(CandyList)

