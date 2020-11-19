/* exported findIndex */


function findIndex(array, value) {
  var atIndex = -1;
  for(var i = 0; i < array.length; i++) {
    if(array[i] === value) {
      atIndex = i;
      return atIndex;
    }
  }
  return atIndex;
}
