var points = [];

// displays
var dTimes = document.getElementById('display_times');
var dPointsAmount = document.getElementById('display_points_amount');
var dCircleDiameter = document.getElementById('display_circle_diameter');
var dPointDiameter = document.getElementById('display_point_diameter');

// sliders
var sTimes;
var sPointsAmount;
var sCircleDiameter;
var sPointDiameter;

function drawPoints() {
  points = [];
  
  var x, y;
  for(var i = 0; i < sPointsAmount.value(); i++) {
    a = i * (360/sPointsAmount.value());
    x = width/2 + sCircleDiameter.value()/2 * cos(a);
    y = height/2 + sCircleDiameter.value()/2 * sin(a);
    points.push(new Point(i, x, y));
    points[i].draw();
  }
}

function connectPoints() {
  for(var i = 0; i < sPointsAmount.value(); i++) {
    toConnectId = int((i * sTimes.value()) % sPointsAmount.value());
    points[i].connect(toConnectId);
  }
}

function displayValuesInHTML() {
  dTimes.innerHTML = 'times: ' + sTimes.value();
  dPointsAmount.innerHTML = 'points amount: ' + sPointsAmount.value();
  dCircleDiameter.innerHTML = 'circle diameter: ' + sCircleDiameter.value();
  dPointDiameter.innerHTML = 'point diameter: ' + sPointDiameter.value();
}

function addClassToElement(parentElementName, className) {
  document.getElementById(parentElementName).childNodes[0].classList.add(className);
}

function initializeSliders() {
  sTimes = createSlider(0.1, 1000, 2, 0.1);
  sTimes.parent('slider_times');
  addClassToElement('slider_times', 'slider');
  sPointsAmount = createSlider(3, 1000, 200, 1);
  sPointsAmount.parent('slider_points_amount');
  addClassToElement('slider_points_amount', 'slider');
  sCircleDiameter = createSlider(10, 2*height, 0.9*height, 10);
  sCircleDiameter.parent('slider_circle_diameter');
  addClassToElement('slider_circle_diameter', 'slider');
  sPointDiameter = createSlider(1, 10, 4, 0.1);
  sPointDiameter.parent('slider_point_diameter');
  addClassToElement('slider_point_diameter', 'slider');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasContainer');

  initializeSliders();
  angleMode(DEGREES);
}

function draw() {
  displayValuesInHTML();

  fill(0);
  stroke(255);
  background(0);

  circle(width/2, height/2, sCircleDiameter.value());
  drawPoints();
  connectPoints();
}