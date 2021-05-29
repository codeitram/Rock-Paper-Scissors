let playerwincount = 0;
let computerwincount = 0;

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    let array = ["Rock", "Paper", "Scissor"];
    return array[index];
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let winnerStatement;
    if (playerSelection == computerSelection) return "It is tie";
    switch (playerSelection) {
        case "rock": {
            if (computerSelection == "paper")
                winnerStatement = "You lose!, paper beats rock";
            else winnerStatement = "You win!, rock beats scissor";
            break;
        }
        case "paper": {
            if (computerSelection == "rock")
                winnerStatement = "You win!, paper beats rock";
            else winnerStatement = "You lose!, scissor beat papers";
        }
        case "scissor": {
            if (computerSelection == "rock")
                winnerStatement = "You lose!, rock beats scissor";
            else winnerStatement = "You win!, scissor beat papers";
        }
    }
    return winnerStatement;
}

function countTracker(winnerStatement) {
    if (winnerStatement.indexOf('win') != -1) {
        playerwincount += 1;
    }
    else if (winnerStatement.indexOf('lose') != -1) {
        computerwincount += 1;
    }
}


//************************** version-1
// function game() {
//     let playerSelection;
//     let computerSelection;
//     let winnerStatement;

//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt('Rock, Paper, Scissor');
//         computerSelection = computerPlay();
//         winnerStatement = playRound(playerSelection, computerSelection);
//         console.log(winnerStatement);
//         countTracker(winnerStatement);

//     }
//     if (playerwincount > computerwincount)
//         console.log(`Player-Wins :: player=${playerwincount} computer=${computerwincount}`);
//     else if (playerwincount < computerwincount)
//         console.log(`Computer-Wins :: player=${playerwincount} computer=${computerwincount}`);
//     else console.log(`it is tie :: player=${playerwincount} computer=${computerwincount}`);
// }
//game()


//***************************version2 */

let but = document.querySelectorAll(".but");
console.log(but);
but.forEach(btn => btn.addEventListener('click', ()=>{
    
    countTracker(playRound(btn.value,computerPlay()));
    let container = document.querySelector('div');
    let div = document.createElement('div');
    div.textContent = `Player-Score: ${playerwincount} Computer-Score: ${computerwincount}`;
    let win = document.createElement('div');
    container.appendChild(div);
    if(playerwincount == 5){
        
        win.textContent = "Congratulations You Won 🏆";
        container.appendChild(win);
        playerwincount =0;
        computerwincount =0;

    }else if(computerwincount ==5){
        win.textContent = "Computer Won, let's try again";
        container.appendChild(win);
        playerwincount =0;
        computerwincount =0;

    }
    
}))


// this is just for testing git client 
