
document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the form from submitting

  let name = document.getElementById('nameInput').value;

  let capitalized = name[0].toUpperCase() + name.slice(1);

  // Show the greeting
  document.getElementById('output').textContent = `Hello, ${capitalized}!`;
});

