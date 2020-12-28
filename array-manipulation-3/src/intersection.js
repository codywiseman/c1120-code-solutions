/* exported intersection */

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) >= 0) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
