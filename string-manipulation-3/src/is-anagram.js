/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var splitStringOne = firstString.split('');
  var splitStringTwo = secondString.split('');
  var firstArray = [];
  var secondArray =[];
  for(var i = 0; i < splitStringOne.length; i++) {
    if(splitStringOne[i] === ' ') {
      //do nothing
    } else firstArray.push(splitStringOne[i]);
  }
  for (var i = 0; i < splitStringTwo.length; i++) {
    if (splitStringTwo[i] === ' ') {
      //do nothing
    } else secondArray.push(splitStringTwo[i]);
  }
  var newFirstString = firstArray.sort().join('');
  var newSecondString = secondArray.sort().join('')
  if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
}
