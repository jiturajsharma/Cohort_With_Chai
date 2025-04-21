const targetElement = document.getElementById("target");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Reset") {
      targetElement.style.color = "black";
    } else {
      targetElement.style.color = btn.textContent.toLowerCase();
    }
  });
});