document.addEventListener("DOMContentLoaded", function() {
    var generateButton = document.getElementById("generateButton");
    var resultElement = document.getElementById("result");
  
    generateButton.addEventListener("click", function() {
      var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
      resultElement.textContent = "Random Number: " + randomNumber;
    });
  });