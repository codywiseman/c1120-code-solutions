/* exported defaults */

function defaults(target,source) {
  var newArr = [];
  var finalObject = {};
  for(var prop in source){
    if(source[prop] <= 3) {
      target[prop] = source[prop];
    }
  }
  for(var prop in target) {
    newArr.push([prop, target[prop]]);
  }
  newArr.sort(function(a, b) {
    return a[1] - b[1];
  })
  for(var i = 0; i < newArr.length; i++) {
    for(var x = 0; x < 1; x++) {
      finalObject[newArr[i][x]] = newArr[i][x + 1];
    }
  }
  return finalObject;
}
