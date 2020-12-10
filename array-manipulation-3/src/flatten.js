/* exported flatten */

function flatten(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++) {
    if(!Array.isArray(array[i])) {
      newArr.push(array[i])
    } else
  }
  return newArr;
};



// [false, [true, [false]], [true]]
