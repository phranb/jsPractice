let userInput = 'rock';
userInput = userInput.toLowerCase();
const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error');
    }
};

function getComputerChoice() {
    let numRan;
    numRan = Math.floor(Math.random() * 3);
    if (numRan === 0) {
        return 'rock';
    }
    if (numRan === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'USER USED SECRET CODE: VICTORY!';
    }
    if (userChoice === computerChoice) {
        return 'Tie.';
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'PC wins';
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'PC wins';
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'USER wins';
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'USER wins';
    }
}

function playGame() {
    let userChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();
    console.log('user: ' + userChoice);
    console.log('computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}
const reloadSite = () => location.reload();
playGame();
