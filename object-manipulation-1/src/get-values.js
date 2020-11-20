/* exported getValues */

function getValues(object) {
  var objValues = [];
  for (var keys in object) {
    objValues.push(object[keys]);
  }
  return objValues;
}
