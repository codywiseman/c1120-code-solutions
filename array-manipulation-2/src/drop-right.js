/* exported dropRight */

function dropRight(array, count) {
  var newArr = [];
  for(var i = 0; i < (array.length - count); i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
