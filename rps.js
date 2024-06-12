let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    const randomizer = Math.floor(Math.random() * rps.length);
    return rps[randomizer];
}

function getHumanChoice () {
    const human = prompt("MAKE YOUR CHOICE:");

    if (human.toLowerCase() === "rock" || human.toLowerCase() === "paper" || human.toLowerCase() === "scissors") {
        return human;
    } else {
        alert("Invalid input! Please try again.")
        return getHumanChoice();
    }
    
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            alert("It's draw.");
        }
        else if (computerChoice === "paper") {
            alert("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            alert("You won! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You won! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            alert ("It's draw.");
        } else {
            alert ("You lose. Scissors beats Paper.");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            alert("You lose. Rock beats Scissors.");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            alert ("You won! Scissors beats Paper.");
            humanScore++;
        } else {
            alert ("It's draw.");
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("You win! Your score is:" + humanScore + " Computer score is:" + computerScore);
    }
    else if (humanScore < computerScore) {
        alert("You lost. Your score is:" + humanScore + " Computer score is:" + computerScore);
    } else {
        alert("Tie.");
    }
}
    playGame();