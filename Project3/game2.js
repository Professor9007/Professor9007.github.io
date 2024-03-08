let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoice = genCompchoice();
    console.log("computer choice = ",compChoice);

if(userChoice===compChoice){
    drawGame()
} else{
    let userWin = true;
    if(userChoice==="rock"){
    userWin = compChoice=== "paper" ? false : true;
    } else if(userChoice==="paper"){
        userWin=compChoice==="scissors" ? false : true;
    }  else {
        userWin = compChoice==="rock" ? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText=`You Win!Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Lose";
        msg.innerText=`You Lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}; 
 const drawGame = () =>{
    
    msg.innerText = "It is a draw";
    msg.style.backgroundColor = "violet";
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})