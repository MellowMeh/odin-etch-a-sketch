let main = document.querySelector('#main');
let title = document.querySelector('#title');
let container = document.querySelector('#container');
let grid = document.querySelector('#grid');
let sidebar = document.querySelector('#sidebar');
let ui = document.querySelector('#ui');
let resolutionSelector = document.querySelector('#resolutionSelector');
let slideContainer = document.querySelector('#slideContainer');
let slider = document.querySelector('#slider');
let gridOverlaySelector = document.querySelector('#gridOverlaySelector');
let checkbox = document.querySelector('#checkbox');
let colorSelector = document.querySelector('#colorSelector');
let colorMenu = document.querySelector('#colorMenu');
let clearButton = document.querySelector('#clearButton');
let footer = document.querySelector('#footer');

let resolution;
let resolutionDisplay;
let amountOfPixels;
let getAmountOfPixels = (sliderInput) => {
    resolution = document.getElementById('slider').value;
    resolutionDisplay = document.createElement('p');
        resolutionDisplay.textContent = resolution + ' x ' + resolution;
        resolutionDisplay.style.display = 'flex';
        resolutionDisplay.style.justifyContent = 'center';
        resolutionSelector.appendChild(resolutionDisplay);
    amountOfPixels = resolution * resolution;
    console.log(amountOfPixels);
}

let pixelSize;
let getPixelSize = () => {
    pixelSize = (100/resolution) + '%';
    console.log(pixelSize)
}

let resetGrid = () => {
    grid.removeChild(pixelArt);
    resolutionSelector.removeChild(resolutionDisplay);
    placeHolder = document.createElement('p');
        placeHolder.textContent = '........';
        placeHolder.style.display = 'flex';
        placeHolder.style.justifyContent = 'center';
        resolutionSelector.appendChild(placeHolder);
}

let pixel;
let pixelArt;
let generateGrid = () => {
    pixelArt = document.createElement('div');
    pixelArt.style.display = 'flex';
    pixelArt.style.flexWrap = 'wrap';
    pixelArt.style.width = '60svh';
    grid.appendChild(pixelArt);
    for (i = 0; i < amountOfPixels; i++) {
        pixel = document.createElement('span');
        pixel.setAttribute('id', 'row');
        pixel.style.border = 'solid';
        pixel.style.borderWidth = '1px';
        pixel.style.width = pixelSize;
        pixel.style.height = pixelSize;
        pixelArt.appendChild(pixel);
    }
}

let changeColorOnHover = () => {
    let coloredPixels = document.querySelectorAll('#row');
    for (let coloredPixel of coloredPixels){
        coloredPixel.addEventListener('mouseenter', () => {
            coloredPixel.style.backgroundColor = colorChosen;
        });
    }    
}

let colorChosen = 'red';
let trackColor = () => {
    colorMenu.addEventListener('change', () => {
        colorChosen = document.getElementById('colorMenu').value;
        console.log(colorChosen);
    })
}


let removePlaceHolder = () => {
    if (placeHolder) {
        resolutionSelector.removeChild(placeHolder);
    }
}

let resetCheckbox = () => {
    document.getElementById("checkbox").checked = false;
}

slider.addEventListener('click', () => {
    resetCheckbox();
    removePlaceHolder();
    getAmountOfPixels();
    getPixelSize();
    generateGrid();
    trackColor();
    changeColorOnHover();
    toggleGrid();
    slider.addEventListener('mousedown', resetGrid)
});

clearButton.addEventListener('click', () => {
    resetCheckbox();
    resetGrid();
    removePlaceHolder();
    getAmountOfPixels();
    getPixelSize();
    generateGrid();
    trackColor();
    changeColorOnHover();
    toggleGrid();
})

let toggleGrid = () => {
    let coloredPixels = document.querySelectorAll('#row');
    for (let coloredPixel of coloredPixels){
        checkbox.addEventListener('mousedown', () => {
            if (checkbox.checked == false) {
                coloredPixel.style.border = 'none';
            } else {
                coloredPixel.style.border = 'solid 1px';
            }
        });
    }    
}

getAmountOfPixels();
getPixelSize();
generateGrid();
trackColor();
changeColorOnHover();
toggleGrid();
slider.addEventListener('mousedown', resetGrid)