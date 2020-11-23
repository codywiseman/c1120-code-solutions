/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split('');
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];
  arr.splice(firstIndex, 1, secondLetter);
  arr.splice(secondIndex, 1 , firstLetter);
  return arr.join('')
}
