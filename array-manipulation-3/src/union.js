/* exported union */

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var x = 0; x < second.length; x++){
    if (newArray.indexOf(second[x]) === -1) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
