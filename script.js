const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";
const paperBtn = document.createElement("button");
paperBtn.textContent = "PAPER";
const scisBtn = document.createElement("button");
scisBtn.textContent = "SCISSORS";

const selections = document.querySelector(".selections");
selections.appendChild(rockBtn);
selections.appendChild(paperBtn);
selections.appendChild(scisBtn);


// ouputs a number from 0 to 2
// 0: ROCK, 1: PAPER, 2: SCISSORS
function getComputerChoice() {
    const val = Math.floor(Math.random() * 3);
    if (val == 0) return "rock";
    else if (val == 1) return "paper";
    else return "scissors";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const res = document.querySelector(".results");
    res.textContent = `Player Score: ${humanScore}, CPU Score: ${computerScore}`;

    function playRound(humanSelection) {
        let computerSelection = getComputerChoice();
        console.log(humanSelection)
        console.log(computerSelection)

        if (humanSelection === computerSelection) {
            alert(`Tie! Both picked ${humanSelection}`);
        }
        else if (humanSelection === "rock") {
            if (computerSelection === "paper") {
                alert("You lose! Paper beats rock");
                computerScore++;
            }
            else if (computerSelection === "scissors") {
                alert("You win! Rock beats Scissors");
                humanScore++;
            }
        }
        else if (humanSelection === "paper") {
            if (computerSelection === "scissors") {
                alert("You lose! Scissors beats paper");
                computerScore++;
            }
            else if (computerSelection === "rock") {
                alert("You win! Paper beats rock");
                humanScore++;
            }
        }
        else if (humanSelection === "scissors") {
            if (computerSelection === "rock") {
                alert("You lose! Rock beats scissors");
                computerScore++;
            }
            else if (computerSelection === "paper") {
                alert("You win! Scissors beats paper");
                humanScore++;
            }
        }

        if (humanScore === 5) console.log("Player Won");
        else if (computerScore === 5) console.log("CPU Won");

        res.textContent = `Player Score: ${humanScore}, CPU Score: ${computerScore}`;
    }

    rockBtn.addEventListener("click", () => {
        resultVal = playRound("rock");
    });
    scisBtn.addEventListener("click", () => {
        resultVal = playRound("scissors");
    });
    paperBtn.addEventListener("click", () => {
        resultVal = playRound("paper");
    });
};

playGame();
