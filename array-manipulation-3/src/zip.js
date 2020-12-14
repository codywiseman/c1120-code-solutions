/* exported zip */

function zip(first, second) {
  var newArr = [];
  var subArr = [];
  for (var i = 0; i < first.length; i++) {
    if (first.length < second.length || first.length === second.length ) {
      subArr.push(first[i]);
      subArr.push(second[i]);
      newArr.push(subArr);
      subArr = [];
    }
    else {
      for (var i = 0; i < second.length; i++) {
        subArr.push(first[i]);
        subArr.push(second[i]);
        newArr.push(subArr);
        subArr = [];
      }
    }
  }
  return newArr;
}
