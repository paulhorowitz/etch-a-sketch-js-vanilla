gridSquares = 64;
const container = document.getElementById('container');
container.style.gridTemplateColumns = `repeat(${gridSquares}, ${(600/gridSquares)}px)`;
container.style.gridTemplateRows = `repeat(${gridSquares}, ${(600/gridSquares)}px)`;
console.log(container)

function createGrid() {
    for (i = 0; i < gridSquares * gridSquares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('div')
    }
}

createGrid(gridSquares)