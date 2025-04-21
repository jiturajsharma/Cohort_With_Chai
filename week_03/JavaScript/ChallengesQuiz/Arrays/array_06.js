

// You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain "Burger".

// Problem Statement: Create a function that removes unhealthy food items (those containing "Burger") and return the updated list.

function filterHealthy(foodList){
    foodList.filter(item => item !== "Burger");
    return foodList
}

const Foods = filterHealthy(["Salad", "Burger", "Apple", "Pizza", "Banana"])
console.log(Foods)
