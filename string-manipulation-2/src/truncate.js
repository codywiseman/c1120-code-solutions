/* exported truncate */

function truncate (length, string) {
  var sliceString = string.slice(0, length);
  var newString = sliceString + '...';
  return newString;
}




// str.slice(0, length)
// newString + '...'
