/* exported equal */

function equal(first, second) {
  var returnVal = true;
  for(var i = 0; i < first.length; i++) {
    if(first[i] !== second[i]) {
      return false;
    } else {
      returnVal = true;
    }
  }
  for (var i = 0; i < second.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    } else {
      returnVal = true;
    }
  }
  return returnVal;
}
