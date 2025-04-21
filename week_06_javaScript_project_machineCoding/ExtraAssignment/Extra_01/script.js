function findHighest() {
    // Get the marks entered by the user
    let marks1 = parseInt(document.getElementById("marks1").value);
    let marks2 = parseInt(document.getElementById("marks2").value);
    let marks3 = parseInt(document.getElementById("marks3").value);
    let marks4 = parseInt(document.getElementById("marks4").value);
    let marks5 = parseInt(document.getElementById("marks5").value);

    // Use ternary operator to find the highest marks
    let highestNumber = Math.max(marks1, marks2, marks3, marks4, marks5);

    // Display the highest marks
    document.getElementById("result").innerText = "The highest marks are: " + highestNumber;
}