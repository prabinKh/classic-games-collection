let userScore = 0;
let computerScore = 0;


const choice = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg");
const compScorePara = document.querySelector("#comp-score");

const userScorePara = document.querySelector("#user-score");
const genComputerChoice = ()=>{
    const options = ['rock','paper','scissor'];
    const randomIdx =Math.floor(Math.random()*3)
    return options[randomIdx];
}


const drawGame =()=>{
    console.log('draw');
    msg.innerText='draw play again';
    msg.style.backgroundColor='blue';

}



const showWinner =(para,userChoice, compChoice)=>{
    if (para){
        userScore++;
        userScorePara.innerText = userScore
    
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        computerScore ++;
        compScorePara.innerText = computerScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';

    }

}

const playGame = (userchoice)=>{
    console.log(userchoice);
    const computerChoice =genComputerChoice();
    console.log(computerChoice);

    if(userchoice === computerChoice){

        drawGame();
        }
        else{
            let userWin =true;
            if (userchoice ==='rock'){
                userWin = computerChoice === 'paper'?false:true;
            }
            else if(userchoice ==='paper')
            {
                userWin = computerChoice === 'scissor'? false:true;

            }
            else{
                userWin = computerChoice ==='rock'?false:true;

            }

            showWinner(userWin, userchoice, computerChoice);
        }


    


}


choice.forEach((i)=>{
    i.addEventListener('click',()=>{
        const userchoice = i.getAttribute("id");




        console.log('image is clicked',userchoice)
        playGame(userchoice);

    })
})