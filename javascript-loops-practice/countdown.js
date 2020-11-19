/* exported countdown */


function countdown(number) {
  var output = [];
  for(var i = number; number >= 0; number--) {
    output.push(number);
  }
  return output;
}
