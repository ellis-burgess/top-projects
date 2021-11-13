const container = document.querySelector('.container');
let gridsize = 16
const gridsquares = []
const resetButton = document.querySelector('#reset');

generateGrid();

document.addEventListener('mousedown', listenHover);
document.addEventListener('mouseup', endListenHover);
resetButton.addEventListener('click', generateGrid);

function listenHover() {
    gridsquares.forEach(function (i) {
        i.addEventListener('mouseenter', changeHover);
    });
}

function endListenHover() {
    gridsquares.forEach(function (i) {
        i.removeEventListener('mouseenter', changeHover);
    })
}

function changeHover(e) {
    this.classList.add("active");
}

function generateGrid(e) {
    console.log(resetButton);

    if (gridsquares.length) {
        for (let i = ((gridsize * gridsize) - 1); i >= 0; i--) {
            container.removeChild(gridsquares[i]);
        }
        gridsquares.length = 0;
    }

    gridsize = prompt('Enter grid size (0-100', '16');
    if ((gridsize < 1) || (gridsize > 100) || (isNaN(gridsize)))
    {
        alert('Invalid input.')
        gridsize = 0;
        return;
    }

    container.style.cssText = `display: grid;
width: 600px;
aspect-ratio: 1;
grid-template: repeat(${gridsize}, 1fr) / repeat(${gridsize}, 1fr);
justify-items: stretch;`;

    for (let i = 0; i < (gridsize * gridsize); i++) {
        gridsquares[i] = document.createElement('div');
        gridsquares[i].classList.add("gridsquare");
        container.appendChild(gridsquares[i]);
        gridsquares[i].classList.remove("active");
    }
}