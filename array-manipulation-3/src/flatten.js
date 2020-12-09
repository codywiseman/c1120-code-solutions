/* exported flatten */

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
      newArr.push(array[i])
    } else {
    for(var x = 0; x < array[i].length; x++){
      if(Array.isArray(array[x])) {
        newArr.push(array[x])
      } else {
      newArr.push(array[x][i])
      }
    }
  }
  return newArr;
}
};
