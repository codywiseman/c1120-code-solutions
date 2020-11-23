/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for(var prop in source) {
    if(keys.indexOf(prop) !== -1 && source[prop] !== undefined) {
      newObject[prop] = source[prop];
    }

  }
  return newObject;
}
