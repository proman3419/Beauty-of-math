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

  this.onClick = function(x, y) {
    if(parseInt(this.x/10) == x && parseInt(this.y/10) == y) {
      if(this.binValue == 0)
        this.binValue = 1;
      else
        this.binValue = 0;

      this.draw();
    }
  }
}