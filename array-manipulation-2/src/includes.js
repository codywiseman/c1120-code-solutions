/* exported includes */

function includes(array, value) {
  var returnValue = false;
  for(var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      returnValue = true;
      break;
    } else if(array === [] || array[i] !== value) {
      returnValue = false;
    }
  }
  return returnValue;
}
