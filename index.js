gridSquares = 16;
const container = document.getElementById('container');
const containerGridSize = 800;
const squares = document.querySelectorAll('div');
container.style.width = `${containerGridSize}px`;
container.style.height = `${containerGridSize}px`;
container.style.gridTemplateColumns = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
container.style.gridTemplateRows = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
currentColor = [];
const rainbowButton = document.getElementById('rainbow-button')

function createGrid() {
    for (i = 0; i < gridSquares * gridSquares; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('div');
        div.style.backgroundColor = 'white';
        createHoverEffect();
    }
}

function randomColor() {
    currentColor[0] = Math.floor(Math.random() * 255);
    currentColor[1] = Math.floor(Math.random() * 255);
    currentColor[2] = Math.floor(Math.random() * 255);
    return (currentColor)
}

function rainbowColors() {
    currentColor = randomColor()
    squares.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            currentColor = randomColor()
            event.target.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
        })
    });
}

function createHoverEffect() {
    squares.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        })
    })
}

createGrid(gridSquares)
rainbowButton.addEventListener('click', function (e) {
    rainbowColors()
})