/* exported defaults */

function defaults(target, source) {
  var newObject = {};
  for(var prop in source) {
    newObject[prop] = source[prop];
  } for(var prop in target) {
    newObject[prop] = target[prop];
  }
  var values = Object.entries(newObject);
  var sortValues = values.sort((a, b) => a[1] - b[1]);
  var finalObject = {};
  for(var prop in sortValues) {
    finalObject[sortValues[prop][0]] = sortValues[prop][1];
  }
  return finalObject;
}
