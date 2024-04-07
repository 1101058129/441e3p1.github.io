let userNeedsHelp = confirm("Do you need help with calculating your average score?");

if (userNeedsHelp) {
    let fullName = prompt("Please enter your full name:");
    let totalScore = 0;

    for (let i = 1; i <= 4; i++) {
        let unit = parseFloat(prompt(`Enter grade for unit ${i}:`));
        totalScore += unit;
    }

    let averageScore = totalScore / 4;

    console.log(`Total Score: ${totalScore}`);
    console.log(`Average Score: ${averageScore}`);
    console.log("Thank you for using the program.");
} else {
    console.log("Thank you for considering the program.");
}