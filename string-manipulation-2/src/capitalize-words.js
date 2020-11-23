/* exported capitalizeWords */

function capitalizeWords(string) {
  var arr = string.split(' ');
  var capArr = [];
  for (i = 0; i < arr.length; i++) {
    let firstLetter =(arr[i].charAt(0)).toUpperCase();
    let restOfWord = (arr[i].slice(1)).toLowerCase();
    capArr.push(firstLetter + restOfWord);
  }
  var newString = capArr.join(' ')
  return newString;
}
