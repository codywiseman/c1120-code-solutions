/* exported ransomCase */

function ransomCase(string) {
  var stringArray = string.split('');
  var newArray = []
  for(var i = 0; i < stringArray.length; i++) {
    if(i % 2 === 0) {
      newArray.push(stringArray[i].toLowerCase());
    } else {
      newArray.push(stringArray[i].toUpperCase());
    }
  }
  return newArray.join('');
}


// index[string.length % 2 === 0].
