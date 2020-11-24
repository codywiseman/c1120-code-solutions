/* exported reverseWords */

function reverseWords(string) {
  var splitWords = string.split('')
  var reverseSplitArr = [];
  for(var i = (splitWords.length - 1); i >= 0; i--) {
    reverseSplitArr.push(splitWords[i]);
  }
  var splitArr = reverseSplitArr.join('');
  var splitWordArr = splitArr.split(' ');
  var reverseAgain = [];
  for(var i = (splitWordArr.length - 1); i >= 0; i--) {
    reverseAgain.push(splitWordArr[i]);
  }
  return reverseAgain.join(' ')
}
