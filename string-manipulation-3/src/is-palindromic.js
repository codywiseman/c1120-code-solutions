/* exported isPalindromic */

function isPalindromic(string) {
  var splitWord = string.split('');
  var reverseSplit = [];
  var stringSpaceRem = []
  for(var i = (splitWord.length - 1); i > -1; i--) {
    if(splitWord[i] === ' ') {
      // do nothing
    } else {
    reverseSplit.push(splitWord[i]);
    }
  }
  for (var i = 0; i < splitWord.length; i++) {
    if(splitWord[i] === ' ') {
      // do nothing
    } else {
      stringSpaceRem.push(splitWord[i]);
    }
  }
  var newString = stringSpaceRem.join('');
  var reverseWord = reverseSplit.join('');
  if(reverseWord === newString) {
    return true;
  } else {
    return false;
  }
}
