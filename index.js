function getComputerChoice(){
if(randomNumber(1,3)===1){
    return "Rock";
}else if(randomNumber(1,3)===2){
return "Paper";
}else{
    return"Scissors";
}
}

function randomNumber(min,max){
   let result= Math.floor(Math.random()*(max-min+1))+min;
   return result;
}

let computerSelection=getComputerChoice();
let playerScore=0;
let computerScore=0;
let playerSelection;


function playRound(playerSelection,computerSelection){
    
    switch(playerSelection){
        case "Rock".toLowerCase():
            if(computerSelection==="Paper"){
                computerScore++;
                return "You lose!Paper beats rock.";
            }else if(computerSelection==="Scissors"){
                playerScore++;
                return "You win!Rock beats scissors.";
                 
            }else {
                return "It's a draw! Replaying the round.";
            }
            
            case "Paper".toLowerCase():
                if(computerSelection==="Rock"){
                    playerScore++;
                    return "You win!Paper beats rock.";
                }else if(computerSelection==="Scissors"){
                    computerScore++;
                    return "You lose!Scissirs beats paper.";
                }else{
                    return "It's a draw! Replaying the round.";
                }
                case "Scissors".toLowerCase():
                    if(computerSelection==="Paper"){
                        playerScore++;
                        return "You win!Scissors beats paper";
                    }else if(computerSelection==="Rock"){
                        computerScore++;
                        return "You lose!Rock beats scissors";
                        
                    }else{
                        return "It's a draw! Replaying the round.";
                       
                    }
    }
}



function game(){

 for(let i=0;i<15;i++){

    console.log(playRound(playerSelection=prompt("Choose your weapon(Rock,Scissors or Paper)"),computerSelection=getComputerChoice()));
    if(playerScore===5||computerScore===5){
        console.log("The game is over, let's see the result 👀👀👀");
        break;
    }
 }
}
game();


console.log("Your score: ",+playerScore);
console.log("Computer score: ",+computerScore);

function setFinalMessage() {
    if(playerScore > computerScore){
      return  'Congratulations!! You won!🥳🥳🥳' ;
    }else if(playerScore<computerScore){
        return "You lost😔 Don't get upset, try again!";
    }else{
        return "It is draw.🤝";
    } 
}
console.log(setFinalMessage());


  console.log('Hello world');