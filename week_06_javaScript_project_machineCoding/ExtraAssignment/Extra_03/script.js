let nameForm = document.getElementById("nameForm")
    nameForm.addEventListener("submit", function (event) {
                        event.preventDefault(); 

    let name = document.getElementById("nameInput").value.trim();
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
        for (let char of name) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
    }
    document.getElementById("output").textContent = `Your name has ${vowelCount} vowels.`;
});
