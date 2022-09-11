let cells = document.querySelectorAll('.cell');
cells = Array.from(cells)

let currentPlayer = "X";

cells.forEach(cell =>{
    cell.addEventListener('click',()=>{
        cell.innerText ="X"

    })
})