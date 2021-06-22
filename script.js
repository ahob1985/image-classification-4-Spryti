// Author: Jordan Muturi

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let submitButton;
let resetButton;

// Global ML Variables
let doodlenet;
let img;
let isModelReady;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(700, 500);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Draw a picture, the submit! :)")
  textP.parent(textDiv);
}

function draw() {

}

function resetCanvas() {
  submitButton.style("display", "none");
  resetButton.style("display", "none");
  canvas(clearCanvas)
}

function modelReady() {

}

function predictImage() {

}

function gotResults(error, results) {

}
