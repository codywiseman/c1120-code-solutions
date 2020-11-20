/* exported toObject */

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}



 // key = keyValuePair[0]
//  value = keyValuePair[1]

  // function toObject(['firstName', 'David']);   ---> { firstName: "David" }
