// Create initial grid
createGrid();


function createGrid(size=16) {
    // Delete existing grid first
    document.querySelector('.grid').remove();

    // Create new grid div
    let grid = document.createElement("div")
    grid.classList.add("grid");
    document.body.appendChild(grid);

    // Calculate square sizes
    let colWidth = 480/size; // width for columns
    let squareHeight = colWidth-2 // width for squares (1px border on each side)
    colWidth = colWidth + "px";
    squareHeight = squareHeight + "px";

    // Create new grid columns
    for (let i = 0; i < size; i++) {
        let col = document.createElement("div");
        col.classList.add("grid-col");
        col.style.width = colWidth;
        grid.appendChild(col);
    }

    // Create new grid squares in each column
    let cols = document.querySelectorAll(".grid-col");
    cols.forEach((col) => {
        for (let i = 0; i < size; i++) {
            let square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.height = squareHeight;
            col.appendChild(square);
        }
    });

    addFillOnHoverEvent();
}


function getNewGridSize() {
    let size = Number(window.prompt("How many squares per side for the new grid? (max: 100)"));
    if (size > 100) {
        size = 100;
    } else if (size < 0) {
        size = 2;
    }
    createGrid(size);
}


function addFillOnHoverEvent() {
    let squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            let fillColor = getRandomColor();
            event.target.style.backgroundColor = fillColor;
        });
    });
}


function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}