/* exported chunk */

function chunk(array, size) {
  debugger;
  const ogSize = size;
  var newArr = [];
  for(i = 0; i < array.length; i += ogSize) {
    var subArr = array.slice(i, size);
    newArr.push(subArr);
    size += ogSize;
  }
  return newArr;
}
