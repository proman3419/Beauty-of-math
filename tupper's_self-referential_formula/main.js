var k = bigInt('4858450636189713423582095962494202044581400587983244549483093085061934704708809928450644769865524364849997247024915119110411605739177407856919754326571855442057210445735883681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300')

function generateGraph() {
  for(var i = 0; i < fields.length; i++)
    fields[i].draw();
}

function stringToBase17(str) {
  var arr = bigInt(str).divide(bigInt(17)).toArray(2).value;
  var result = [];

  // Reverse the array to add the zeros in the next step before 
  // the rest of the values
  arr = arr.reverse();

  // Filling the not specified fields' values with 0s
  while(arr.length < 1802)
    arr.push(0);

  // Reverse once again to neutralize the previous reversion
  arr = arr.reverse();

  // Every array in arrays == a column of the grid
  while(arr.length >= 17) {
    // Reverse every column
    result.push(arr.splice(0, 17).reverse());
  }

  return result;
}

function initializeFields(arr) {
  for(var x = 0; x < width; x += 10) {
    for(var y = 0; y <= height; y += 10) {
      fields.push(new Field(x, y, arr[x/10][y/10]));
    }
  }
}

// #region buttons
function copyButton(str) {
  var textarea = document.getElementById(str);
  textarea.select();
  document.execCommand('copy');
}

function clearButton(str) {
  if(str === 'input_field')
    document.getElementById('input_field').value = '';
  else if(str === 'canvas')
    console.log('not implemented yet');
}

function generateButton(str) {
  if(str === 'graph')
  {
    fields = [];
    var inputField = document.getElementById('input_field');
    var temp_arr = stringToBase17(inputField.value);
    initializeFields(temp_arr);
    generateGraph();
  }
  else if(str === 'value')
  {
    console.log('not implemented yet');
  }
}
// #endregion

// #region globals
var fields = [];
// #endregion

function setup() {
  var canvas = createCanvas(1060, 170);
  canvas.parent('canvasContainer');

  document.getElementById('input_field').value = k;
  generateButton('graph');
}

function mouseClicked(event) {
  var x = parseInt(mouseX/10);
  var y = parseInt(mouseY/10);
}