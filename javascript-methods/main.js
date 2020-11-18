var numOne = 38;
var numTwo = 40;
var numThree = 11;

var maximumValue = Math.max(numOne, numTwo, numThree);

console.log('result of maximumValue:', maximumValue)

var heroes = ['Deadpool', 'Spiderman', 'Black Panther', 'Iron Man']

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber)

console.log('result of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);


var library = [
  {
    title: 'Cat and the hat',
    author: 'Dr. Suess'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  }
];

var lastBook = library.pop();

console.log('result of lastBook:', lastBook);

var firstBook = library.shift();

console.log('result of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

var pushLibrary = library.push(js);

var unshiftLibrary = library.unshift(css);

var spliceLibrary = library.splice(1, 1);

console.log('result of library:', library);


var fullName = "cody wiseman"

var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
