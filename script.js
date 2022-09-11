// Get array from cell divs
let cells = document.querySelectorAll('.cell');
cells = Array.from(cells)
let playerOne = "X";

// winning combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6.7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


// Alternate click input for X and O
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(cell.innerText.trim() != "") return
        cell.innerText = playerOne
        playerOne = playerOne === "X" ? "O" : "X"
    })
})

