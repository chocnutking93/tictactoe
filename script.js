// Get cells

let cells = document.querySelectorAll('.cell');
let cellArray = Array.from(cells)


const resetButton = document.getElementById('reset');
const winningMessage = document.getElementById('winner-text');
let currentTurn = "X";

resetButton.addEventListener('click',resetBoard);

const winningCombinations = [
    // rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagnoal
    [0,4,8],
    [2,4,6]
];

gameStart()

function gameStart(){
    cellArray.forEach(cell => cell.addEventListener('click',handleClick, {once:true}));

}

function handleClick(e){
    const cellIndex = this.getAttribute("cell")
    console.log(this)
    // const cell = e.target;
    // console.log(cell)
    this.innerText = currentTurn;
    // checkForWinner(currentTurn)
    // currentTurn = currentTurn === "X" ? "O" : "X";
    checkWinner()
    switchTurns()
    checkDraw()
}


function switchTurns() {
    currentTurn = currentTurn === "X" ? "O" : "X";
}


function checkWinner(){
    winningCombinations.forEach(combination => {
        let winner = combination.every(combo => cellArray[combo].innerText === currentTurn)
        if(winner){
            winningMessage.innerText = `${currentTurn} wins!`
            endGame()
        }else{

        }             
    })
}

function endGame(){
    cellArray.forEach(cell => cell.removeEventListener('click',handleClick, {once:true}));
}

function resetBoard(){
    window.location.reload(true)
}

function checkDraw(){
    let tie = cellArray.every(cell => cell.innerText != "")
    if(tie){
        winningMessage.innerText = "It's a tie!"
    }
}



// cellArray.forEach(cell => {
//     console.log(cell.innerText != "")
// })

