// An arrow function to get user input
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "bomb") {
        return userInput
    }    
    else {
        return "You need to choose a valid option";
    }
}

// function to get a random choice for the computer
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            return "rock";

        case 1:
            return "paper"

        case 2:
            return "scissors"

        default:
            break;
    }
}

// determining a winner between user and computer
function determineWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice){
        return "The game was a tie"
    }
    
    if(userChoice == "rock") {
        if (computerChoice == 'paper') {
            return "Computer wins"
        } else {
            return "User wins"
        }
    }

    if (userChoice == 'paper') {
        if (computerChoice == 'scissors') {
            return "Computer wins"
        } else {
            return "User wins"
        }
    }


    if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return "Computer wins"
        } else {
            return "User wins"
        }
    }

    if (userChoice == 'bomb') {
        return "User wins"
    }
}

// console.log(determineWinner("rock", "scissors"))

// function to start and play the game and after it pro
function playGame() {
    userChoice = getUserChoice("Paper");
    computerChoice = getComputerChoice();
    return determineWinner(userChoice, computerChoice);
}

console.log(playGame());