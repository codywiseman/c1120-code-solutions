/* exported oddOrEven */

function oddOrEven(array) {
  var oddOrEvenValue = []
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      oddOrEvenValue.push("even");
    } else {
      oddOrEvenValue.push("odd");
    }
  }return oddOrEvenValue;
}
