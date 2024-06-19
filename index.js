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
let colorSelector = document.querySelector('#colorSelector');
let clearButton = document.querySelector('#clearButton');
let footer = document.querySelector('#footer');

let resolution;
let resolutionDisplay;
let amountOfPixels;
let getAmountOfPixels = (sliderInput) => {
    resolution = document.getElementById('slider').value;
    resolutionDisplay = document.createElement('p');
        resolutionDisplay.textContent = resolution + ' x ' + resolution;
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
            coloredPixel.style.backgroundColor = 'lightGray';
        coloredPixel.addEventListener('mouseleave', () => {
            coloredPixel.style.backgroundColor = '#fdfdfd';
        })
        })
    }    
}

slideContainer.addEventListener('mouseup', () => {
    getAmountOfPixels();
    getPixelSize();
    generateGrid();
    changeColorOnHover();
    slider.addEventListener('mousedown', resetGrid)
});