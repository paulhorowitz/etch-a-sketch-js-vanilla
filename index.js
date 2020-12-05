gridSquares = 16;
currentColor = [];
const container = document.getElementById('container');
const containerGridSize = 800;
container.style.width = `${containerGridSize}px`;
container.style.height = `${containerGridSize}px`;
container.style.gridTemplateColumns = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
container.style.gridTemplateRows = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
const rainbowButton = document.getElementById('rainbow-button');
const blackButton = document.getElementById('black-button');

function createGrid() {
    for (i = 0; i < gridSquares * gridSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
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
    document.querySelectorAll('div.grid').forEach(element => {
        element.addEventListener('mouseover', function(event) {
            currentColor = randomColor()
            event.target.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
        })
    });
}


function createHoverEffect() {
    document.querySelectorAll('div.grid').forEach(element => {
        element.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        })
    })
}

createGrid(gridSquares)
rainbowButton.addEventListener('click', function (e) {
    rainbowColors();
})
blackButton.addEventListener('click', function (e) {
    createHoverEffect();
})