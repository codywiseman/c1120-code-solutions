/* exported getKeys */

function getKeys(object) {
  var objKeys = [];
  for(var keys in object) {
    objKeys.push(keys);
  }
  return objKeys;
}
