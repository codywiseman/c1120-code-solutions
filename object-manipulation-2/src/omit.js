/* exported omit */

function omit(source, keys) {
  var newObject = {};
  for (var prop in source) {
    if (keys.indexOf(prop) === -1) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}
