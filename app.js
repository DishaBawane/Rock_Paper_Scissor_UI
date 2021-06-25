// 1) *Show things when user open the page
// 2) disable Rock, Paper, Scissor button until user click on play button
// 3) When user click on play button, enable the rock, papper, scissor buttons
// 4) You can select computer's item on the same click
// 5) once user select something, match and show the result

let userScore = 0;
let computerScore = 0;
let elements =['rock','paper','scissor'];

let emoji = {
    rock: ' 🗻 ',
    paper: '📃',
    scissor: '✂️',}

let message = {
        start:'Select an Element',
        computerwin: '💻 Computer Wins!!!',
        userwin: '  🙋🏽‍♂️ Congratulations!!!! You are Winner',
        tie: ' 🤷‍♂️ Its a tie',
        
      }


let computerSelected;
let userSelected;      
let selectUserScore = document.querySelector(".user_score");
let selectComputerScore = document.querySelector(".computer_score");

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");
let msgResult = document.querySelector(".msg");
const userChoiceEmoji = document.querySelector(".uselectedimg");
const computerChoiceEmoji = document.querySelector(".cselectedimg");
const playBtn = document.querySelector(".play_button");
const resetBtn = document.querySelector(".reset_button");


resetBtn.style.display = 'none';

const displayElements = (opt) =>{

    rockChoice.disabled = opt ;
    paperChoice.disabled = opt; 
    scissorChoice.disabled = opt;

}

displayElements(true);

selectUserScore.textContent = userScore;
selectComputerScore.textContent = computerScore;
rockChoice.textContent = emoji.rock;
paperChoice.textContent = emoji.paper;
scissorChoice.textContent = emoji.scissor;
msgResult.textContent = message.start;


playBtn.addEventListener('click',() => {

    computerSelected = Math.trunc(Math.random()*3);
    displayElements(false);

    playBtn.style.display = 'none';
    resetBtn.style.display = 'block';
    

});

rockChoice.addEventListener('click',()=>{
    userSelected = 0;
    compareResult();
  });
  
  paperChoice.addEventListener('click',()=>{
    userSelected = 1;
    compareResult();

  });
  
  scissorChoice.addEventListener('click',()=>{
  
    userSelected = 2;
    compareResult();
    
  });


const compareResult = ()=>{

    userChoiceEmoji.textContent = emoji[elements[userSelected]];
    computerChoiceEmoji.textContent =emoji[elements[computerSelected]];
    displayElements(true);

    if (userSelected === computerSelected){
        msgResult.textContent = message.tie;
    }else if(userSelected === 0 && computerSelected ===1){
        computerScor += 1;
        msgResult.textContent = message.computerwin;
    }else if(userSelected === 1 && computerSelected ===0){
        userScore += 1;
        msgResult.textContent = message.userwin;
    }else if(userSelected === 1 && computerSelected ===2 ){
        computerScor += 1;
        msgResult.textContent = message.computerwin;
    }else if(userSelected === 2 && computerSelected ===1 ){
        userScore += 1;
        msgResult.textContent = message.userwin;
    }else if(userSelected === 0 && computerSelected ===2 ){
        userScore += 1;
        msgResult.textContent = message.userwin;
    }else if(userSelected === 2 && computerSelected === 0 ){
        computerScor += 1;
        msgResult.textContent = message.computerwin;
    }

    playBtn.style.display = 'block';
    resetBtn.style.display = 'none';
    selectUserScore.textContent = userScore;
    selectComputerScore.textContent = computerScore;

};

resetBtn.addEventListener('click',()=>{
    msgResult.textContent = message.start;
    displayElements(true);
    playBtn.style.display = 'block';
    resetBtn.style.display = 'none';
});




