const buttons = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("You clicked:", button.id); 
        console.log("Current Scores - User:", userScore, "Computer:", computerScore);
        const playerChoice = button.id;
        const computerChoice = computerplay();
        playRound(playerChoice, computerChoice);
    });
});

function computerplay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        userScore++;
        resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}
