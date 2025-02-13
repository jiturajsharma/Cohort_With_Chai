// if else also called greedy alogorithms
let numberofGuest = 4;

let pizzaSize;
// small <= 2
// medium <= 5
// large 

if (numberofGuest <=2) {
    pizzaSize = "small"
}
else if (numberofGuest <= 5){
    pizzaSize = "mediuim"
}
else {
    pizzaSize = "large"
}

console.log(pizzaSize)