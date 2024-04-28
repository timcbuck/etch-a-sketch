let grid = document.querySelector('.grid');

// Create grid columns
for (let i = 0; i < 16; i++) {
    let col = document.createElement("div");
    col.classList.add("grid-col");
    grid.appendChild(col);
};

// Create squares
let cols = document.querySelectorAll(".grid-col");
cols.forEach((col) => {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        col.appendChild(square);
    }
});
