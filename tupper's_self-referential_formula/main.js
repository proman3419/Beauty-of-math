var big_int = bigInt('4858450636189713423582095962494202044581400587983244549483093085061934704708809928450644769865524364849997247024915119110411605739177407856919754326571855442057210445735883681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300')

function createGrid(arr) {
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      fill(0);

      try {
        if(arr[x/10][y/10] == 1)
          fill(255);
      }
      catch {}

      stroke(123);
      strokeWeight(1);
      rect(width-x, y, 10, 10);
    }
  }
}

function stringToBase17Arrays(str) {
  var arr = bigInt(str).divide(bigInt(17)).toArray(2).value;
  var arrays = [];

  // Every array in arrays == a column of the grid
  while (arr.length > 0) {
    arrays.push(arr.splice(0, 17));
  }

  return arrays;
}

function setup() {
  var canvas = createCanvas(1060, 170);
  canvas.parent('canvasContainer');
  var arr = stringToBase17Arrays(big_int);
  createGrid(arr);
}

function draw() {

}

function mouseClicked(event) {
  console.log(event);
}