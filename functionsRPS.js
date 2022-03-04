let playerScore = 0;
let computerScore = 0;

// gives computer a random move
function computerPlay() {
    let decision = Math.floor(Math.random() * 3 + 1);

    if (decision === 1) {
        return "rock";
    } else if (decision === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// prompts player to pick their move
function playerSelection() {
    let decision = prompt("What will you choose?", "Rock, Paper, or Scissors");
    return decision.toLowerCase();
}

// returns a string of round outcome & updates Score
function checkGame(player, computer) {
        if (player == "rock" && computer == "scissors") {
            playerScore++;
            return "You Win! Rock beats scissors"
        } else if (player == "scissors" && computer == "paper") {
            playerScore++;
            return "You Win! Scissors beats paper";
        } else if (player == "paper" && computer == "rock") {
            playerScore++;
            return "You Win! Paper beats rock";
        } else if (computer == "rock" && player == "scissors") {
            computerScore++;
            return "You Lose! Rock beats scissors";
        } else if (computer == "scissors" && player == "paper"){
            computerScore++;
            return "You Lose! Scissors beats paper";
        } else if (computer == "paper" && player == "rock") {
            computerScore++;
            return "You Lose! Paper beats rock";
        }  else {
            return "It was a draw";
        }
}

// plays round of Rock Paper Scissors and alerts outcome
function playRound() {
    let player = playerSelection();
    let computer = computerPlay();

    alert(checkGame(player, computer));
}

// plays 5 rounds, tells outcome of match
function match() {
    let i = 1;
    while (playerScore < 5 && computerScore < 5) {
        console.log("Game " + (i));
        console.log(playRound());
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore);
        i++;
    }

    if (playerScore > computerScore) {
        console.log("YOU WON THE MATCH!");
    } else if (computerScore > playerScore) {
        console.log("YOU LOST THE MATCH!");
    } else {
        console.log("It was a TIE")
    }
}

match();


//  || player == "paper" && computer == "rock"):

