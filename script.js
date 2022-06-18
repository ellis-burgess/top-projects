const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');
const slider = document.getElementById("gridSizeRange");
const sliderOutput = document.getElementById("sliderValue");
const colorSelection = document.getElementById("colorChange");
const eraser = document.getElementById("eraser");
const gridsquares = [];

let gridsize = slider.value;
let color = colorSelection.value;

sliderOutput.textContent = slider.value;

generateGrid();

document.addEventListener('mousedown', listenHover);
document.addEventListener('mouseup', endListenHover);
resetButton.addEventListener('click', generateGrid);
slider.addEventListener('mouseup', generateGrid);
slider.addEventListener('input', function() {
    sliderOutput.textContent = this.value;
})
colorSelection.addEventListener('input', function() {
    color = colorSelection.value;
})
colorSelection.addEventListener('click', function() {
    color = colorSelection.value;
})
eraser.addEventListener('click', function() {
    color = '#FFFFFF';
})

function listenHover(e) {
    let mousePosition = e.path[0];
    gridsquares.forEach(function (i) {
        i.addEventListener('mouseenter', changeHover);
    });
    if (mousePosition.classList.contains('gridsquare')) {
        mousePosition.style.background = color;
    }
}

function endListenHover() {
    gridsquares.forEach(function (i) {
        i.removeEventListener('mouseenter', changeHover);
    })
}

function changeHover() {
    this.style.background = color;
}

function generateGrid() {
    if (gridsquares.length) {
        for (let i = ((gridsize * gridsize) - 1); i >= 0; i--) {
            container.removeChild(gridsquares[i]);
        }
        gridsquares.length = 0;
    }

    gridsize = slider.value;

    container.style.cssText = `display: grid;
grid-template: repeat(${gridsize}, 1fr) / repeat(${gridsize}, 1fr);
justify-items: stretch;`;

    for (let i = 0; i < (gridsize * gridsize); i++) {
        gridsquares[i] = document.createElement('div');
        gridsquares[i].classList.add("gridsquare");
        container.appendChild(gridsquares[i]);
        gridsquares[i].style.background = 'white';
    }
    color = colorSelection.value;
}