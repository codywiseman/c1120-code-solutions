/* exported titleCase */

function titleCase(title) {
  var splitWords = title.split(' ');
  var capWord = [];
  for(var i = 0; i < splitWords.length; i++) {
    if(i > 0) {
      var endPunc = splitWords[i - 1].charAt(splitWords[i - 1].length - 1);
    };
    if ((splitWords[i] === 'in' || splitWords[i] === 'of' || splitWords[i] === 'the' || splitWords[i] === 'for') && endPunc !== ':') {
      capWord.push(splitWords[i]);
    } else if (splitWords[i].includes('-')) {
        var sepHyphen = splitWords[i].split('-');
        var toBeJoinedHyphen = [];
        for (var z = 0; z < sepHyphen.length; z++) {
          var capLetter = sepHyphen[z].charAt(0).toUpperCase() + sepHyphen[z].slice(1);
          toBeJoinedHyphen.push(capLetter);
        }
        capWord.push(toBeJoinedHyphen.join('-'))
    } else if (splitWords[i] === 'javascript') {
        capWord.push('JavaScript');
    } else if (splitWords[i] === 'javascript:' || splitWords[i] === 'Javascript:') {
        capWord.push('JavaScript:');
    } else if (splitWords[i] === 'api') {
        capWord.push('API');
    } else {
        var capLetter = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);
        capWord.push(capLetter);
    }
  }
  return capWord.join(' ');
}
