function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3); //ouputs a number from 0 to 2
    if (randNum === 0) return "rock";
    else if (randNum === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    const inputStr = prompt("Rock, Paper, or Scissors");
    return inputStr.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        alert(`Tie! Both picked ${humanSelection}`);
    }
    else if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            alert("You lose! Paper beats rock");
            return 1;
        }
        else if (computerSelection === "scissors") {
            alert("You win! Rock beats Scissors");
            return 0;
        }
    }
    else if (humanSelection === "paper") {
        if (computerSelection === "scissors") {
            alert("You lose! Scissors beats paper");
            return 1;
        }
        else if (computerSelection === "rock") {
            alert("You win! Paper beats rock");
            return 0;
        }
    }
    else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            alert("You lose! Rock beats scissors");
            return 1;
        }
        else if (computerSelection === "paper") {
            alert("You win! Scissors beats paper");
            return 0;
        }
    }
} 

function playGame(numRounds) {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let resultVal = playRound(humanSelection, computerSelection);
        if (resultVal === 0) humanScore++;
        else if (resultVal === 1) computerScore++; 

        console.log(`You: ${humanScore}, CPU: ${computerScore}`);
    }

    console.log("GAME OVER!");
    humanScore > computerScore ? console.log("You win!") : console.log("You lose.");
}

playGame(5);

