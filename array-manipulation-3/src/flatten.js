/* exported flatten */

function flatten(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++) {
    if(!Array.isArray(array[i])) {
      newArr.push(array[i])
    } else {
      for (var x = 0; x < array[i].length; x++) {
        newArr.push(array[i][x])
      }
    }
  }
  return newArr;
};



// [false, [true, [false]], [true]]
