console.log('hello, world');

var firstQuery = document.querySelector('h1');
console.log('h1 query:', firstQuery);
console.dir(firstQuery);

var secondQuery = document.querySelector('#explanation')
console.log('explanation query:', secondQuery);
console.dir(secondQuery);

var thirdQuery = document.querySelector('.hint')
console.log('hint query', thirdQuery);
console.dir(thirdQuery);

var pNodeList = document.querySelectorAll('p');
console.log('pNodeList:', pNodeList);

var exampleLinkNodeList = document.querySelectorAll('.example-link');
console.log('exampleLinkNodeList:', exampleLinkNodeList);
