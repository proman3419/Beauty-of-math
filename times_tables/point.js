function Point(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
  
  this.draw = function() {
    fill(255);
    circle(this.x, this.y, sPointDiameter.value());
  }
  
  this.connect = function(id) {
    stroke(this.getColor());
    line(this.x, this.y, points[id].x, points[id].y);
  }

  // Map value from one range to another
  this.mapValue = function(initMin, initMax, finalMin, finalMax, value) {
    return (value - initMin) / (initMax - initMin) * (finalMax - finalMin);
  }

  this.getColor = function() {
    var r = this.mapValue(timesMin, timesMax, 0, 255, sTimes.value());
    var g = this.mapValue(pointsAmountMin, pointsAmountMax, 0, 255, sPointsAmount.value());
    var b = abs(r - g);
    return color(r, g, b);
  }
}