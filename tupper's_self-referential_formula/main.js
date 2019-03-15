var k = bigInt('4858450636189713423582095962494202044581400587983244549483093085061934704708809928450644769865524364849997247024915119110411605739177407856919754326571855442057210445735883681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300')

function createGrid(arr) {
  for(var x = 0; x < width; x += 10) {
    for(var y = 0; y <= height; y += 10) {
      fill(0);

      try {
        if(arr[x/10][y/10] == 1)
          fill(255);
      } catch {}

      stroke(123);
      strokeWeight(1);
      // height-y because of the fact, that in CS coordinate system's
      // y axis is reversed
      rect(x, height-y-10, 10, 10);
    }
  }
}

function stringToBase17Array(str) {
  var arr = bigInt(str).divide(bigInt(17)).toArray(2).value;
  var arrays = [];

  // Every array in arrays == a column of the grid
  while(arr.length > 0) {
    // Reverse every column
    arrays.push(arr.splice(0, 17).reverse());
  }

  // Reverse all rows
  arrays = arrays.reverse();

  return arrays;
}

// #region buttons
function copyButton(str) {
  var textarea = document.getElementById(str);
  textarea.select();
  document.execCommand('copy');
}

function clearButton() {
  document.getElementById('input_field').value = '';
}

function generateButton(str) {
  if(str === 'graph')
  {
    var inputField = document.getElementById('input_field');
    var arr = stringToBase17Array(inputField.value);
    createGrid(arr);
  }
  else if(str === 'value')
  {
    console.log('not implemented yet');
  }
}
// #endregion

function setup() {
  var canvas = createCanvas(1060, 170);
  canvas.parent('canvasContainer');

  document.getElementById('input_field').value = k;
  generateButton('graph');
}

function mouseClicked(event) {
  console.log(event);
}