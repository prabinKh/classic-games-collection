let box = document.querySelectorAll('.box');
let resetbutton = document.querySelector('#reset');

let newbutton = document.querySelector('#newbutton');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#message')


let turnO = true;// playerX ,  player y it is index 
let winPatterns = [
                [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]

            
            ]


box.forEach((boxs)=>{
    boxs.addEventListener('click',()=>{
        console.log('clicked')
        if(turnO){
            boxs.innerText = "X";
            turnO = false;
        }
        else{
            boxs.innerText = "O";
            turnO = true;
        }
        boxs.disabled = true;
        checkWinner();
    })
})
const disableBoxes =()=>{
    for(let boxs of box){
        boxs.disabled = true;
    }
}



const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is. ${winner}`;
    msgContainer.classList.remove('hide')
    disableBoxes();

}


const checkWinner = ()=>{
    for(pattern of winPatterns){
        // console.log(pattern)
        let pos1Val= box[pattern[0]].innerText
        let pos2Val= box[pattern[1]].innerText;
        let pos3Val= box[pattern[2]].innerText;
        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val)
                showWinner(pos1Val)
            }
        }

    }
    

}
const enableBoxes =()=>{
    for(let boxs of box){
        boxs.disabled = false;
        boxs.innerText = '';

    }
}
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    box.innerText= '';
    msgContainer.classList.add('hide')




}

newbutton.addEventListener('click',resetGame);
resetbutton.addEventListener('click',resetGame)

// resetbutton.addEventListener('click',()=>{
//     console.log('reset button clicked')
//     resetbutton.innerText = 'reset'
// })