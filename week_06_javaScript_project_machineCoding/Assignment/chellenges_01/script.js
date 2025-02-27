const bulbSwitch = document.getElementById("switch");
const bulb = document.getElementById("bulb");
const statusSpan = document.getElementById("status"); // Get the status span
const container = document.querySelector(".container");
let isOn = false; // Keep track of the bulb's state

bulbSwitch.addEventListener("click", () => {
  isOn = !isOn; // Toggle the state

  if (isOn) {
    bulb.style.backgroundColor = "yellow"; // Turn the bulb on
    statusSpan.textContent = "On"; // Update the status text
    container.style.backgroundColor = "#fbfb9d";
  } else {
    bulb.style.backgroundColor = "#adadad"; // Turn the bulb off
    statusSpan.textContent = "Off"; // Update the status text
    container.style.backgroundColor = "#fff";
  }
});