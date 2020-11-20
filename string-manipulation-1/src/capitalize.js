/* exported capitalize */

function capitalize(word) {
  var capLetter = (word.slice(0, 1)).toUpperCase();
  var toLower = (word.slice(1)).toLowerCase();
  return capLetter + toLower;
}
