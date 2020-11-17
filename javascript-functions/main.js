function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('minutestosecondsresult:', convertMinutesToSecondsResult);


function greet(name) {
  var greetName = 'Hey, ' + name;
  return greetName;
}

var greetNameResult = greet('Beavis');

console.log('greatNameResult:', greetNameResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'});

console.log('getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
 var lastElement = array[array.length - 1];
 return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElementResult:', getLastElementResult);
