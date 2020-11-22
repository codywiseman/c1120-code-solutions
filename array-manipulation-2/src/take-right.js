/* exported takeRight */

function takeRight(array, count) {
  var newArr = [];
  for(var i = (array.length - count); i < array.length; i++) {
    if(i < 0) {
      return newArr;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
