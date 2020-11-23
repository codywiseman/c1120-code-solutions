/* exported numVowels */

function numVowels(string) {
  var vowels = 0;
  var vowelList = 'aAeEiIoOuU';
  for(var i = 0; i < string.length; i++) {
    if(vowelList.indexOf(string[i]) !== -1) {
      vowels++;
    }
  }
  return vowels;
}




// if charAt(i) === "aAeEIiOoUu" num++
