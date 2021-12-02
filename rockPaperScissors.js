const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('That is not a valid choice. Please choose rock, paper, or scissors.');
  }
};


const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3);
  if(computerInput === 0 ) {
    return 'rock';
  }
  else if (computerInput === 1) {
    return 'paper';
  }
  else {
    return 'scissors';   
  }
} 

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'Tie!'; 
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'You Lost :('; 
    }
    else {
      return 'You Won!'
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'rock') {
      return 'You Won!'; 
    }
    else {
      return 'You Lost :('; 
    } 
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'You Lost :(';
    }
    else {
      return 'You Won!';
    }
  }
  if(userChoice === 'bomb') {
    return 'You Won!'
  }
}


const playGame = () => {
  const userChoice     = getUserChoice('bomb');
  const computerChoice = getComputerChoice(); 
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); 
};

playGame(); 