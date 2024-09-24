const choices = ["rock", "paper", "scissors"]
const displayUserChoice = document.getElementById("displayUserChoice");
const displayComputerChoice = document.getElementById("displayComputerChoice");
const displayResult = document.getElementById("displayResult");
const displayUserScore = document.getElementById("displayUserScore");
const displayComputerScore = document.getElementById("displayComputerScore");
let userScore = 0;
let computerScore = 0;

function game(userChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (computerChoice === userChoice){
        result = "IT'S A TIE";
    }
    else {
        switch(userChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors" :
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;   
        }
    }
    displayComputerChoice.textContent = ` computer's choice:${computerChoice}`;
    displayUserChoice.textContent = `your choice: ${userChoice}`;
    displayResult.textContent = result;

    displayResult.classList.remove("red" , "green", "blue");
    switch(result) {
        case "YOU WIN":
            displayResult.classList.add("green");
            userScore++;
            displayUserScore.textContent = userScore;
            displayUserScore.classList.add("green");
            break;
        case "YOU LOSE":
            displayResult.classList.add("red");
            computerScore++;
            displayComputerScore.textContent = computerScore;
            displayComputerScore.classList.add("red");
            break; 
        case "IT'S A TIE":
            displayResult.classList.add("blue");
    }
    
}