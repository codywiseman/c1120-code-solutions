/* exported compact */
function compact(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === "" || array[i] === undefined ||
      array[i] === 0 || array[i] === null || !array[i] === !NaN ) {
      newArray.push();
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
