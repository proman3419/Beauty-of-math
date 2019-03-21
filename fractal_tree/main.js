function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);

  if(length > sMinLength.value()) {
    leftRight(1, length);
    leftRight(-1, length);
  }
}

function leftRight(direction, length) {
  push();
  rotate(direction * sAngle.value());
  branch(length * sLengthDecrease.value());
  pop();
}

function displayValuesInHTML() {
  dAngle.innerHTML = 'angle: ' + Number.parseFloat(sAngle.value()).toPrecision(8);
  dStartingLength.innerHTML = 'starting length: ' + sStartingLength.value();
  dMinLength.innerHTML = 'min length: ' + sMinLength.value();
  dLengthDecrease.innerHTML = 'length decrease: ' + sLengthDecrease.value();
}

function initializeSliders() {
  sAngle = createSlider(Math.PI/32, Math.PI, Math.PI/4, Math.PI/64);
  sAngle.parent('slider_angle')
  sStartingLength = createSlider(10, 500, 100, 10);
  sStartingLength.parent('slider_starting_length');
  sMinLength = createSlider(4, 100, 10, 2);
  sMinLength.parent('slider_min_length');
  sLengthDecrease = createSlider(0, 0.8, 0.8, 0.05);
  sLengthDecrease.parent('slider_length_decrease');
}

// #region globals
// displays
var dAngle = document.getElementById('display_angle');
var dStartingLength = document.getElementById('display_starting_length');
var dMinLength = document.getElementById('display_min_length');
var dLengthDecrease = document.getElementById('display_length_decrease');

// sliders
var sAngle;
var sStartingLength;
var sMinLength;
var sLengthDecrease;
// #endregion

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasContainer');

  initializeSliders();
  stroke(255);
}

function draw() {
  displayValuesInHTML();
  background(0);
  translate(width/2, height);
  branch(sStartingLength.value());
}