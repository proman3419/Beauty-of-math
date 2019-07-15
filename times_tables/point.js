function Point(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
  
  this.draw = function() {
    fill(255);
    circle(this.x, this.y, sPointDiameter.value());
  }
  
  this.connect = function(id) {
    stroke(255);
    line(this.x, this.y, points[id].x, points[id].y);
  }
}