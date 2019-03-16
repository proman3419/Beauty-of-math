function Field(x, y, binValue) {
  this.x = x;
  this.y = y;
  this.binValue = binValue;

  this.draw = function() {
    if(this.binValue === 0)
      fill(0);
    else
      fill(255);

    stroke(123);
    strokeWeight(1);
    rect(this.x, this.y, 10, 10);
  }
}