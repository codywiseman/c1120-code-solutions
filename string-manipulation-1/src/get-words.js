/* exported getWords */

function getWords(string) {
  if(string === '') {
    return [];
  } else {
  var array = string.split(' ');
  return array;
  }
}