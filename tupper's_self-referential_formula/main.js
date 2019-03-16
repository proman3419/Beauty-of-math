var selfReferentialFormula = bigInt('4858450636189713423582095962494202044581400587983244549483093085061934704708809928450644769865524364849997247024915119110411605739177407856919754326571855442057210445735883681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300')

function generateGraph() {
  for(var i = 0; i < fields.length; i++)
    fields[i].draw();
}

function stringToBin(str) {
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

  // Every array in arr == a column of the grid
  while(arr.length > 0) {
    // Reverse every column
    result.push(arr.splice(0, 17).reverse());
  }

  return result;
}

function initializeFields(arr) {
  for(var x = 0; x < width; x += 10) {
    for(var y = 0; y < height; y += 10) {
      fields.push(new Field(x, y, arr[x/10][y/10]));
    }
  }
}

function binToString() {
  var arr = [];
  var temp_arr = [];
  var result = 0;

  for(var i = 0; i < fields.length; i++)
    arr.push(fields[i].binValue);

  // Every array in arr == a column of the grid
  while(arr.length > 0) {
    // Reverse every column
    temp_arr = temp_arr.concat(arr.splice(0, 17).reverse());
  }

  result = bigInt.fromArray(temp_arr, 2);
  result = result.multiply(bigInt(17));

  return result;
}

// #region buttons
function copyButton(str) {
  var textarea = document.getElementById(str);
  textarea.select();
  document.execCommand('copy');
}

function clearButton(str) {
  if(str === 'input')
    document.getElementById('input_field').value = '';
  else if(str === 'graph') {
    for(var i = 0; i < fields.length; i++)
      fields[i].binValue = 0;
    generateGraph();
  }   
}

function generateButton(str) {
  if(str === 'graph') {
    fields = [];
    var k = inputField.value.replace(/\D/g,'');

    if(bigInt(k).isDivisibleBy(17)) {
      var temp_arr = stringToBin(k);
      initializeFields(temp_arr);
      generateGraph();      
    }
    else
      alert('k value has to be divisible by 17');
  }
  else if(str === 'value')
    outputField.value = binToString();
}
// #endregion

// #region globals
var fields = [];
var inputField = document.getElementById('input_field');
var outputField = document.getElementById('output_field');
// #endregion

function setup() {
  var canvas = createCanvas(1060, 170);
  canvas.parent('canvasContainer');

  inputField.value = selfReferentialFormula;
  generateButton('graph');
}

function mouseClicked(event) {
  var x = parseInt(mouseX/10);
  var y = parseInt(mouseY/10);

  for(var i = 0; i < fields.length; i++)
    fields[i].onClick(x, y);
}