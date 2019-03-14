function getNewCoordinates(x, y) {
  var r = Math.random();
  
  if(r >= 0.93)
    return [-0.15*x + 0.28*y, 0.26*x + 0.24*y + 0.44];
  if(r >= 0.86)
    return [0.2*x - 0.26*y, 0.23*x + 0.22*y + 1.6];
  if(r >= 0.01)
    return [0.85*x + 0.04*y, -0.04*x + 0.85*y + 1.6];
  return [0, 0.16*y];
}

function translateCoordinates(x, y) {
  var x = (canvasWidth + x*scale_x) / 2 + shift_x;
  var y = (canvasHeight - y*scale_y) / 2 - shift_y;
  return [x, y];
}

function displayValuesInHTML() {
  dShX.innerHTML = 'shift x: ' + parseInt(sShX.value);
  dShY.innerHTML = 'shift y: ' + parseInt(sShY.value);
  dScX.innerHTML = 'scale x: ' + parseInt(sScX.value);
  dScY.innerHTML = 'scale y: ' + parseInt(sScY.value);
  dW.innerHTML = 'weight: ' + parseInt(sW.value);
}

function getValuesFromSliders() {
  shift_x = parseInt(sShX.value);
  shift_y = parseInt(sShY.value);
  scale_x = parseInt(sScX.value);
  scale_y = parseInt(sScY.value);
  weight = parseInt(sW.value);
}

// #region buttons
function reset() {
  sShX.value = -15;
  sShY.value = -160;
  sScX.value = 65;
  sScY.value = 65;
  sW.value = 2;
}

function apply() {
  getValuesFromSliders();
  background(0);
}
// #endregion

// #region globals
// displays
var dShX = document.getElementById('display_shift_x');
var dShY = document.getElementById('display_shift_y');
var dScX = document.getElementById('display_scale_x');
var dScY = document.getElementById('display_scale_y');
var dW = document.getElementById('display_weight');

// sliders
var sShX = document.getElementById('slider_shift_x');
var sShY = document.getElementById('slider_shift_y');
var sScX = document.getElementById('slider_scale_x');
var sScY = document.getElementById('slider_scale_y');
var sW = document.getElementById('slider_weight');

// sliders values
var shift_x = shift_y = scale_x = scale_y = weight = null;

var canvasWidth = 400;
var canvasHeight = 400;
var g_x = 0;
var g_y = 0;
// #endregion

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvasContainer');
  reset();
  getValuesFromSliders();

  background(0);
  stroke(255);
}

function draw() {
  displayValuesInHTML();

  [g_x, g_y] = getNewCoordinates(g_x, g_y);
  [x, y] = translateCoordinates(g_x, g_y);

  strokeWeight(weight);
  point(x, y);
}