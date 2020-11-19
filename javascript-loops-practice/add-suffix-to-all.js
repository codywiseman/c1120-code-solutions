/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var wordPlusSuffix = [];
  for(var i = 0; i < words.length; i++) {
    wordPlusSuffix.push(words[i] + suffix);
  }
  return wordPlusSuffix;
}
