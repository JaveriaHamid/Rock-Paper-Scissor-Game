const playerChoiceDisplay = document.querySelector('.p-choice');
const computerChoiceDisplay = document.querySelector('.c-choice');
const playerScoreDisplay = document.querySelector('.p-count');
const computerScoreDisplay = document.querySelector('.c-count');
const chooseMove = document.querySelector('.move');
const movesLeftDisplay = document.querySelector('.moves-left');
const btnOptions = document.querySelector('.options');
const reloadBtn = document.querySelector('.reload-btn');
const resultDisplay = document.querySelector('.result');
const rpsButtons = document.querySelectorAll('.rpsBtn');

let moves = 0;
let playerScore = 0;
let computerScore = 0; 


// #5


// #4
function pScores(){
   playerScore++;
  // console.log(playerScore);
   playerScoreDisplay.textContent = playerScore;
   console.log(playerScoreDisplay.textContent);
}

function cScores(){
   computerScore++;
  // console.log(computerScore);
   computerScoreDisplay.textContent = computerScore;
   console.log(computerScoreDisplay.textContent);
} 


// #3
function playGame(){
    rpsButtons.forEach(button => button.addEventListener('click', (playerChoice) => {
   
     moves++;
     movesLeftDisplay.innerText = `Moves Left: ${10 - moves}`
     movesLeft = movesLeftDisplay.innerText;
     console.log(movesLeft);
 
     playerChoice = button.textContent;
     console.log(playerChoice);

     playerChoiceDisplay.textContent = playerChoice; 
 
     const computerChoice = generateComputerChoice();
     //console.log(compChoice);
     computerChoiceDisplay.textContent = computerChoice;
     console.log(computerChoiceDisplay.textContent);

     const resultT = getResult(playerChoice, computerChoice);
      resultDisplay.textContent = resultT; 
      console.log(resultDisplay.textContent);

     if(moves == 10){
      gameOver(playerScore, computerScore)
    }
    }))
 }


// #1 Computer Choice
function generateComputerChoice() {
   const cpuChoices = ["Rock", "Paper", "Scissor"];
   const randomNumber = Math.floor(Math.random() * 3);
    return cpuChoices[randomNumber];
}


// #2 Get Result
function getResult(playerChoice , computerChoice){
 
   if(playerChoice === computerChoice){
        result = "It's a draw!";     
   }
   else if(playerChoice == 'Rock'){
    if(computerChoice == 'Paper'){
        cScores();
        result = "Computer Won!";
    }else{
        pScores();
        result = "Player Won!";
    }
   }
   else if(playerChoice == 'Scissor'){
    if(computerChoice == 'Rock'){
        cScores();
        result = "Computer Won!";
    }else{
        pScores();
        result = "Player Won!";
    }
   }
   else if(playerChoice == 'Paper'){
    if(computerChoice == 'Scissor'){
        cScores();
        result = "Computer Won!";
    }else{
        pScores();
        result = "Player Won!";
    }
   }
}

function gameOver(playerScore, computerScore){
    rpsButtons.forEach(button => {
      button.computedStyleMap.display = 'none';
    })
  
    chooseMove.innerText = 'Game Over!';
    chooseMove.style.fontSize = '23px';
    chooseMove.style.letterSpacing = '6px';
    chooseMove.style.color = 'red';

   if (playerScore === computerScore){
    resultDisplay.innerText = "It's a Draw!";
    resultDisplay.style.color = "white";
   }

   if(playerScore > computerScore){
    resultDisplay.style.letterSpacing = '1px';
    resultDisplay.innerText = 'YOU WIN :)';
    resultDisplay.style.color = "#2ad32a";
    resultDisplay.style.fontStyle = 'oblique';
   
   }
   else if(playerScore < computerScore){
    resultDisplay.style.letterSpacing = '1px';
    resultDisplay.innerText = 'YOU LOSE :(';
    resultDisplay.style.color = "#ff0000";
    resultDisplay.style.fontStyle = 'oblique';
   }

   btnOptions.style.display = 'none';

   reloadBtn.innerText = 'Play Again!';
   reloadBtn.classList.add('reload');
   reloadBtn.style.display = 'flex';
   reloadBtn.addEventListener('click', () => {
      window.location.reload();
})
}

playGame(); 




