/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.length > 4) {
    var upperLetter = word.charAt(0).toUpperCase();
    var restOfFirstWord = (word.slice(1 , 4)).toLowerCase();
    var firstWord = upperLetter + restOfFirstWord;
    var secondUpperLetter = word.charAt(4).toUpperCase();
    var restOfSecondWord = (word.slice(5)).toLowerCase();
    var secondWord = secondUpperLetter + restOfSecondWord;
    var wholeWord = firstWord + secondWord;
    return wholeWord;
  } else {
  var upperLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1);
  var restOfWordToLower = restOfWord.toLowerCase();
  return upperLetter + restOfWordToLower;
  }
}

// firstUpperCase = word.charAt(0).toUpperCase()
//  var capLetter = (word.slice(0, 1)).toUpperCase();
