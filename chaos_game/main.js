function initializePoints() {
  for(var i = 0; i < n; i++)
    points.push([random(width), random(height)]);
}

function drawPoints() {
  strokeWeight(weight);

  stroke(66, 140, 244);
  point(wanderingPoint[0], wanderingPoint[1]);

  stroke(255);
  for(var i = 0; i < n; i++)
    point(points[i][0], points[i][1]);    
}

function wander() {
  let r = floor(random(n));
  wanderingPoint[0] = lerp(wanderingPoint[0], points[r][0], 0.5);
  wanderingPoint[1] = lerp(wanderingPoint[1], points[r][1], 0.5);
}

function reset() {
  wanderingPoint = [random(width), random(height)];
  initializePoints();

  background(0);
  drawPoints();
}

// #region globals
var n = 3;
var points = [];
var wanderingPoint = [];
var weight = 5;
// #endregion

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasContainer');

  reset();
}

function draw() {
  wander();
  drawPoints();
}

function keyPressed() {
  keyNumber = parseInt(key);

  if(isNaN(keyNumber))
    return;

  if(keyNumber < 2)
    keyNumber += 10;

  n = keyNumber;
  reset();
}