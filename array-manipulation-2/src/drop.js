/* exported drop */

function drop(array, count) {
  var newArr = [];
  for(var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
