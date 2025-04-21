// Create a baisc calculator that performs +, -, *, / based on user input.

// ----------------Problem statement------------------
// Write a function that uses switch-case to perform arithmetic operations. Handle tha edges case of "Cannot divide by zero".

function calculator(num1, num2, operator){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 *num2;
        case "/":
            return num2 !==0 ? num1/num2: "Cannot divide by zero";
            default:
                return "Invalid Operator";
    }
}