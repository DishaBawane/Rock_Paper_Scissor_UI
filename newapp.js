let userScore = 0;
let computerScore = 0;
let Rock_Choice = document.getElementById("rock");
let Paper_Choice = document.getElementById("paper");
let Scissor_Choice = document.getElementById("scissor");
let user_Choice = document.querySelector(".uselectedimg");
let computer_Choice = document.querySelector(".cselectedimg");
let play_Choice = document.querySelector(".play_button");
let msg_Result = document.querySelector("msg");
const userScore_ui = document.querySelector(".user_score");
const computerScore_ui = document.querySelector(".computer_score");
const play_BTN = document.querySelector(".play_button");

let message = {
    computerwin: 'Computer Wins!!!',
    userwin: 'Congratulations!!!! You are Winner',
    tie: 'Its a tie',
    
  };
let choices = {
    rock: '⛰️',
    paper: '📃',
    scissor: '✂️',};

let compChoice =['rock','paper','scissor'];

 Rock_Choice.textContent = choices.rock;
 Paper_Choice.textContent = choices.paper;
 Scissor_Choice.textContent = choices.scissor;


 /*computer random choice for game*/

 play_BTN.addEventListener('click',function()
 {  
     
    game();
   //showWinner(userChoice,computerChoice)



    // let choiceNumber = Math.floor(Math.random()*3);
    // let computerChoice = compChoice[choiceNumber];
    // console.log( computerChoice);
    // if(choiceNumber === 0){
    //   computer_Choice.textContent=choices.rock;
    // }else if(choiceNumber === 1){
    //   computer_Choice.textContent=choices.paper;
    // }else{
    //   computer_Choice.textContent=choices.scissor;
    // }
})

function game(userChoice){

    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice = compChoice[choiceNumber];
    console.log( computerChoice);
    //showWinner(userChoice,computerChoice);

};


Rock_Choice.addEventListener('click',function(){
  game('rock');
  user_Choice.textContent=choices.rock;
})

Paper_Choice.addEventListener('click',function(){
  game('paper');
  user_Choice.textContent=choices.paper;
})

Scissor_Choice.addEventListener('click',function(){

  game('scissor');
  user_Choice.textContent=choices.scissor;
})

