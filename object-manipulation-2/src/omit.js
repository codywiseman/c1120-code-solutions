/* exported omit */

function omit(source, keys) {
  var newObject = source;
  for (var prop in source) {
    if (keys.indexOf(prop) !== -1 && source[prop] !== undefined) {
      delete newObject[prop];
    }
  }
  return newObject;
}
