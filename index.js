gridSquares = 16;
const container = document.getElementById('container');
const containerGridSize = 800;
container.style.width = `${containerGridSize}px`;
container.style.height = `${containerGridSize}px`;
container.style.gridTemplateColumns = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
container.style.gridTemplateRows = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
currentColor = [];
console.log(container)

function createGrid() {
    for (i = 0; i < gridSquares * gridSquares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('div');
    }
}

function randomColor() {
    currentColor[0] = Math.floor(Math.random() * 255);
    currentColor[1] = Math.floor(Math.random() * 255);
    currentColor[2] = Math.floor(Math.random() * 255);
    return (currentColor)
}

createGrid(gridSquares)
const squares = document.querySelectorAll('div');
currentColor = randomColor()
console.log(currentColor)
squares.forEach(element => {
    element.addEventListener('mouseover', function(event) {
        currentColor = randomColor()
        event.target.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
    })
});
