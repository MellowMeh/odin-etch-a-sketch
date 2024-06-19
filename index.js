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
let amountOfPixels;
let getAmountOfPixels = (sliderInput) => {
    resolution = document.getElementById('slider').value;
    let resolutionDisplay = document.createElement('p');
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
    grid.removeChild(pixel);
}

slider.addEventListener('change', () => {
    getAmountOfPixels();
    getPixelSize();
    for (i = 0; i < amountOfPixels; i++) {
        let pixel = document.createElement('div');
        pixel.style.border = 'solid';
        pixel.style.borderWidth = '1px';
        pixel.style.width = pixelSize;
        pixel.style.height = pixelSize;
        grid.appendChild(pixel);
    }
});