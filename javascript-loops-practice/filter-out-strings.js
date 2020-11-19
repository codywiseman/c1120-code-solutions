/* exported filterOutStrings */

function filterOutStrings(values) {
  var filtered = values;
  for(var i = 0; i < values.length; i++) {
    if(typeof values[i] === "string") {
      values.splice(i, 1);
      i--;
    }
  }
  return filtered;
}
