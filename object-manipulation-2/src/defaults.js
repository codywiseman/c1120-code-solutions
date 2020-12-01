/* exported defaults */

function defaults(target, source) {
  for(var prop in source) {
    if(target.hasOwnProperty(prop)) {
    //do nothing
    } else {
    target[prop] = source[prop];
    }
  }
}
