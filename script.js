let yourScore = 0;
let computerScore = 0;
let myscore = document.querySelector(".user-score");
let comp = document.querySelector(".Ai-score");
let img = document.querySelectorAll("img");
let info = document.querySelector(".info");
let reset = document.querySelector(".reset");

const draw = (userChoice) => {
    info.innerHTML = `It's a Draw! You both chose ${userChoice}`;
    info.style.background = "gray";
}
reset.addEventListener("click",()=>{
    yourScore = 0;
    computerScore = 0;
    myscore.innerText = 0;
    comp.innerText = 0;
    info.innerHTML = "Choose your Option!";
    info.style.background = "black";
});
const showWinner = (userWin,userChoice,compChoice)  => {
    if(userWin){
        yourScore++;
        
        myscore.innerText = yourScore;
        info.innerHTML = `You Win !! Your ${userChoice} beat ${compChoice}`;
        info.style.backgroundColor = "green";
    }else{
        
        computerScore++;
        comp.innerText = computerScore;
        info.innerHTML = `You Lose !! Your ${userChoice} not beat ${compChoice}`;
        info.style.backgroundColor = "red";
    }
}

const computerChoice = () => {
    let  choiceArray = ["Rock","Paper","Scissor"];
    let random = Math.floor(Math.random()*3);
    let Choice = choiceArray[random];
    return Choice;
}
const playGame = (userChoice) => {
    
    let compChoice = computerChoice();

    if(userChoice === compChoice){
        draw(userChoice);
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            //paper //scissor
            userWin = compChoice ==="Paper"? false : true;
        }else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
img.forEach(button =>{
    button.addEventListener("click",(e)=>{
        let userChoice = e.target.id;
        playGame(userChoice);
    });
});