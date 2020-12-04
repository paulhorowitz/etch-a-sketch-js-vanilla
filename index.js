gridSquares = 16;
const container = document.getElementById('container');
console.log(container)
for (i = 0; i < gridSquares * gridSquares; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('div')
    div.style.gridTemplateColumns = `repeat(${gridSquares}, 25px)`;
    div.style.gridTemplateRows = `repeat(${gridSquares}, 25px)`;
}