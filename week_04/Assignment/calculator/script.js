
const userInput = document.querySelector("#user-input");
const err = document.getElementById("error");

const handleNumberClick = (e) => {
  if (
    ["NaN", "0"].includes(userInput.innerText) ||
    userInput.innerText.includes(`${err}`)
  ) {
    userInput.innerText = "";
  }
  userInput.innerText += e.target.innerHTML.trim();
};

document.querySelectorAll(".numbers").forEach((item) => {
  item.addEventListener("click", handleNumberClick);
});

const calculatePercentage = (num, percent) => num + (num * percent) / 100;

const handleOperationClick = (e) => {
  const operationKey = e.target.innerHTML.trim();

  switch (operationKey) {
    case "AC":
      userInput.innerText = "0";
      err.innerText = "";
      break;
    case "DEL":
      userInput.innerText =
        userInput.innerText.length > 1 ? userInput.innerText.slice(0, -1) : "0";
      break;
    case "%":
      const parts = userInput.innerText.split(/([+\-*/])/);
      if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[2])) {
        const [num, , percent] = parts;
        userInput.innerText = calculatePercentage(
          parseFloat(num),
          parseFloat(percent)
        ).toString();
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (
        userInput.innerText !== "0" &&
        !isNaN(userInput.innerText.slice(-1))
      ) {
        userInput.innerText += operationKey;
      }
      break;
    case "=":
      const expression = userInput.innerText;
      if (expression.includes("/0")) {
        err.innerText = "Can't divide by zero";
        return;
      }
      try {
        let result = Function(`return (${expression})`)();
        userInput.innerText = result.toString();
        err.innerText = "";
      } catch (error) {
        err.innerText = "Invalid Format Error";
        console.error(error);
      }
      break;
  }
};

document.querySelectorAll(".operations").forEach((operation) => {
  operation.addEventListener("click", handleOperationClick);
});














// *********************************Second Method***********************************






// const userInput = document.querySelector("#user-input");
// const err = document.getElementById("error");

// document.querySelector(".divide").addEventListener("click", (e) => {
//   console.log(e.target.innerHTML="/")
//     e.target.innerHTML.trim()="/";

// });

// const calculatePercentage = (num, percent) => num + (num * percent) / 100;

// document.querySelectorAll(".numbers").forEach((item) => {
//   item.addEventListener("click", (e) => {
//     if (
//       userInput.innerText === "NaN" ||
//       userInput.innerText === "0" ||
//       userInput.innerText.includes("Error")
//     ) {
//       userInput.innerText = "";
//     }

//     userInput.innerText += e.target.innerHTML.trim();

//   });
// });

// document.querySelectorAll(".operations").forEach((operation) => {
//   operation.addEventListener("click", (e) => {
//     const operationKey = e.target.innerHTML.trim();

//     console.log(operationKey);

//     if (operationKey === "AC") {
//       userInput.innerText = "0";
//       err.innerText = "";
//     } else if (operationKey === "DEL") {
//       userInput.innerText =
//         userInput.innerText.length > 1
//           ? userInput.innerText.substring(0, userInput.innerText.length - 1)
//           : "0";
//     } else if (operationKey === "%") {
//       if (
//         userInput.innerText.length >= 1 &&
//         !isNaN(userInput.innerText.slice(-1))
//       ) {
//         userInput.innerText += operationKey;
//       }
//     } else if (["+", "-", "*", "/"].includes(operationKey)) {
//       if (
//         userInput.innerText !== "0" &&
//         !isNaN(userInput.innerText.slice(-1))
//       ) {
//         userInput.innerText += operationKey;
//       }
//     } else if (operationKey === "=") {
//       const expression = (userInput.innerText);

//       //Check for division by zero
//       if (expression.includes("/0")) {
//         err.innerText = "Can't divide by zero";
//         return;
//       }

//       try {
//         //Safely evaluate the expression
//         let result = Function(` return (${expression})`)();
//         userInput.innerText = result.toString();
//         err.innerText = ""; // Clear error message
//       } catch (error) {
//         err.innerText = "";
//       }
//     }
//   });
// });

