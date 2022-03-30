
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

// prompts player to click their move 
function playerSelection(string) {
    return string;
}

// returns a string of round outcome & updates Score
function gameResults(player, computer) {
        if (player == "rock" && computer == "scissors") {
            playerScore++;
            return "You Win! Rock beats scissors";
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
function playRound(button) {
    let player = playerSelection(button);
    let computer = computerPlay();

    return (gameResults(player, computer));
}

// plays 5 rounds, tells outcome of match
function match(buttonID) {
    let i = 1;
    while (playerScore < 5 && computerScore < 5) {
        console.log("Game " + (i));
        console.log(playRound(buttonID));
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

/*
const buttonPaper = document.querySelector('#paper');
const buttonRock = document.querySelector('#rock');
const buttonScissors = document.querySelector('#scissors');

buttonPaper.addEventListener('click', function() {
    playRound(buttonPaper.id);
});
buttonRock.addEventListener('click', function() {
    playRound(buttonRock.id);
});
buttonScissors.addEventListener('click', function() {
    playRound(buttonScissors.id);
});
*/

// function that removes animation, only if it is a transform
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skips it if its not a transform
    this.classList.remove('playing'); // removes the transition
}


const gameText = document.querySelector('#gameText');
const buttons = document.querySelectorAll('.button');

let playerScore = 0;
let computerScore = 0;
let i = 0;

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        button.classList.add('playing');
        if (playerScore < 5 && computerScore < 5) {
            gameText.innerHTML = "Game " + (i + 1) + 
            "\n" + playRound(button.id);
            document.querySelector('#player').innerHTML = "Player Score: " + playerScore;
            document.querySelector('#computer').innerHTML = "ComputerScore Score: " + computerScore;
            i++;
        }

        if (playerScore === 5) {
            console.log("YOU WON THE MATCH!");
        } else if (computerScore === 5) {
            console.log("YOU LOST THE MATCH!");
        }
    });
});

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

//  || player == "paper" && computer == "rock"):
