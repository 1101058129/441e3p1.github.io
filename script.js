//Jon Wu Yuhan 223190723
document.addEventListener('DOMContentLoaded', function() {  
    let userNeedsHelp = confirm("Do you need help with calculating your average score?");  
  
    if (userNeedsHelp) {  
        let fullName = prompt("Please enter your full name:");  
        let totalScore = 0;  
  
        for (let i = 1; i <= 4; i++) {  
            let unit = parseFloat(prompt(`Enter grade for unit ${i}:`));  
            totalScore += unit;  
        }  
  
        let averageScore = totalScore / 4;  
  
        // Gets the result container element  
        let resultContainer = document.getElementById('result-container');  
  
        // Create and set the element that displays the total score
        let totalScoreElement = document.createElement('p');  
        totalScoreElement.textContent = `Total Score: ${totalScore}`;  
        resultContainer.appendChild(totalScoreElement);  
  
        // Creates and sets the element that displays the average score  
        let averageScoreElement = document.createElement('p');  
        averageScoreElement.textContent = `Average Score: ${averageScore}`;  
        resultContainer.appendChild(averageScoreElement);  
  
        // Create and set the element that displays the thank you message 
        let thankYouElement = document.createElement('p');  
        thankYouElement.textContent = "Thank you for using the program.";  
        resultContainer.appendChild(thankYouElement);  
    } else {  
        //  Thank you for considering using the program 
        let resultContainer = document.getElementById('result-container');  
        let thankYouElement = document.createElement('p');  
        thankYouElement.textContent = "Thank you for considering the program.";  
        resultContainer.appendChild(thankYouElement);  
    }  
});