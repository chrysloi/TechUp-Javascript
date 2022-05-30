let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
    if (userGuess == computerGuess) {
        return true
    }
    
    if (userGuess > computerGuess && userGuess < secretTarget) {
        return true
    }

    if (computerGuess > userGuess && computerGuess < secretTarget) {
        return false
    }

    if (userGuess < computerGuess && userGuess > secretTarget) {
        return true
    }

    if (computerGuess < userGuess && computerGuess > secretTarget) {
        return false
    }
}

function updateScore(winner) {
    winner = compareGuesses(3, 2, 5);
    if (winner == true) {
        humanScore += 1 
    } else {
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}

console.log();