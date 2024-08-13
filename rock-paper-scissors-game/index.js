const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");
const playerWin = document.getElementById("user-score")
 const computerWin = document.getElementById("computer-score")

let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener("click", () =>{
    const result = playRound(button.id, computerPlay())
        resultEl.textContent = result;
        playerWin.textContent = playerScore;
        computerWin.textContent = computerScore;

});
})


function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() *
    choices.length)
    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection){
if(playerSelection === computerSelection){
    return "it,´s a tie";
}else if
    ((playerSelection === "rock" &&
    computerSelection === "scissors") ||
    (playerSelection === "paper" && 
    computerSelection === "rock") ||
    (playerSelection === "scissors" &&
    computerSelection === "paper")
     ){
        playerScore++;
        computerScore--;
        if(computerScore < 0){
            computerScore = "0";
        }
        return " you win! " + playerSelection + " beats " + computerSelection
     }else{
        computerScore++;
        playerScore--;
        if(playerScore < 0){
            playerScore = "0";
        }
        return "You lose! " + computerSelection + " beats " + playerSelection;
     }

console.log(playRound());
}
