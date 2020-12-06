gridSquares = 7;
currentColor = [];
const container = document.getElementById('container');
const containerGridSize = 800;
container.style.width = `${containerGridSize}px`;
container.style.height = `${containerGridSize}px`;
const rainbowButton = document.getElementById('rainbow-button');
const blackButton = document.getElementById('black-button');
const resetButton = document.getElementById('reset-button');
const toggleGridEl = document.getElementById('toggle-grid');
var gridOn = true;

function createGrid(gridSquares) {
    container.style.gridTemplateColumns = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
    container.style.gridTemplateRows = `repeat(${gridSquares}, ${(containerGridSize/gridSquares)}px)`;
    for (i = 0; i < gridSquares * gridSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
        div.style.backgroundColor = 'white';
        div.style.border = '1px solid #40abbf'
    }
    createHoverEffect();
}

// Creates an array of random RGB color numbers
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

function resetGrid() {
    document.querySelectorAll('div.grid').forEach(element => {
        element.style.backgroundColor = '#ffffff'
    })
}

function toggleGrid() {
    const div = document.querySelectorAll('div.grid')
    console.log(gridOn)
    if (gridOn == true) {
        div.forEach(element => 
        {
            element.style.removeProperty('border');
        })
        gridOn = false;    
    }   
    else {
        div.forEach(element => 
        {
            element.style.border = '1px solid #40abbf';
        })
        gridOn = true;
    }
}

function removeGrid() {
    const container = document.getElementById("container");
    while (container.firstChild) {
        console.log('Test')
        container.removeChild(container.lastChild);
    }
}

createGrid(gridSquares)
rainbowButton.addEventListener('click', function (e) {
    rainbowColors();
})
blackButton.addEventListener('click', function (e) {
    createHoverEffect();
})

resetButton.addEventListener('click', function (e) {
    resetGrid();
})

toggleGridEl.addEventListener('click', function (e) {
    toggleGrid()
})

const slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    gridValue = this.value;
    removeGrid();
    createGrid(gridValue);
}

