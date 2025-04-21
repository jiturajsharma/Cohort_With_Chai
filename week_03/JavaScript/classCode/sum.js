let myArray = [1,3,5,6,7];
let anotherArray = []
function sumFact(numbers){
    let sum = 0;
    for(let i = 1; numbers.length; i++){
        sum  = sum + numbers[i]
        // sum += numbers[i]
    }
    return sum
}
let result = sumFact(myArray)
console.log(result)

let anotherResult = sumFact([2,5,6,7,7,8,9])
console.log(anotherResult)

