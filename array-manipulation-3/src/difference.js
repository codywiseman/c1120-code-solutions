/* exported difference */

function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      newArr.push(second[x]);
    }
  }
  return newArr
}
