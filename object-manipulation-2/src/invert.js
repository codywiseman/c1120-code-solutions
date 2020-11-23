/* exported invert */

function invert(source) {
  var newObject = {}
  for(var prop in source) {
    newObject[source[prop]] = prop;
  }
  return newObject;
}
