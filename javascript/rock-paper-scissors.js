// Written in Codecademy's Introduction to JavaScript path.

const getUserChoice = userInput =>
{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' ||
     userInput === 'paper' ||
     userInput === 'scissors' || 
     userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid choice!');
	}
};

const getComputerChoice = () =>
{
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) =>
{
  // The game is bombed
  if (userChoice === 'bomb') {
    return 'User wins!';
  }
  
  // The game is a tie
  if (userChoice === computerChoice) {
    return 'Tie!';
  }
  
  // The game has a winner
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else if (computerChoice === 'scissors') {
      return 'User wins!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else if (computerChoice === 'rock') {
      return 'User wins!';
    }
  }
  
 	if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else if (computerChoice === 'paper') {
      return 'User wins!';
    }
  }
}

const playGame = () =>
{
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  
  console.log(userChoice + '\n' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
