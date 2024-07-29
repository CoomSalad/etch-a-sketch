let row_no = 16;
let col_no = 16;

function drawGrid() {
    // draw row_no rows each with col_no squares
    // container is a column flex container
    const container = document.querySelector("#container");
    for (let i = 0; i < row_no; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let j = 0; j < col_no; j++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.addEventListener("mouseenter", function(event) {
                event.target.classList.toggle("on");
            });
            newRow.appendChild(newSquare);
        }
        // append row to container
        container.appendChild(newRow);
    }
}

function deleteGrid() {
    const container = document.querySelector("#container");
    container.innerHTML = '';
}

function drawCustomGrid() {
    let newSize = +prompt("Enter size for new grid (max 100):");
    if (newSize < 1)
        newSize = 1;
    if (newSize > 100)
        newSize = 100;
    row_no = newSize;
    col_no = newSize;
    deleteGrid();
    drawGrid();
}

function initialize() {
    drawGrid();
    const drawNewBtn = document.querySelector("button");
    drawNewBtn.addEventListener("click", drawCustomGrid);
}

document.addEventListener("DOMContentLoaded", initialize);
