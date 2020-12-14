/* exported unique */

function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i === array.indexOf(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
